Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Write-Host '--- Migration templates: start ---'
$projectRoot = Resolve-Path "$PSScriptRoot\.."
$source = Join-Path $projectRoot 'src/components/pages'
$dest   = Join-Path $projectRoot 'src/components/templates'

if (-not (Test-Path $source)) { throw "Source path not found: $source" }
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }

$files = Get-ChildItem -Path $source -Recurse -Filter *.template.tsx
if (-not $files) { Write-Warning 'No *.template.tsx files found.' }

foreach ($f in $files) {
  $relative = $f.FullName.Substring($source.Length).TrimStart('\\/')
  $targetFile = Join-Path $dest $relative
  $targetDir = Split-Path $targetFile -Parent
  if (-not (Test-Path $targetDir)) { New-Item -ItemType Directory -Path $targetDir | Out-Null }
  Copy-Item -Path $f.FullName -Destination $targetFile -Force
  Write-Host "Copied: $relative"
}

Write-Host '--- Migration templates: done ---'
Write-Host 'Removing migration script (self-delete).'
$scriptPath = $MyInvocation.MyCommand.Path
Remove-Item $scriptPath -Force
