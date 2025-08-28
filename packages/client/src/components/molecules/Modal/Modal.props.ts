export type ModalButton = { name: string; onClick?: () => void };

export type ModalProps = {
  show: boolean;                 
  children: string;             
  btn1?: ModalButton;   
  btn2?: ModalButton; 
};
