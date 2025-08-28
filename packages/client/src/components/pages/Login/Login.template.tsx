import { Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";

export default function Login() {
  return (
    <>
      <Wave />
      <SectionForm type="login" />
      <Wave />
      <TitleWithParagraph title="Politique des cookis">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        praesentium! Sint recusandae ut beatae voluptate itaque minima fugiat
        reprehenderit dolore exercitationem! Molestiae perspiciatis dolorum
        mollitia molestias ipsum. Necessitatibus, velit dolorum.
      </TitleWithParagraph>
    </>
  );
}
