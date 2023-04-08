// Valida os campos Nome, Descrição, Imagem e Raridade
export default function validateText(cn, cd, ci, cr) {
  return cn.length > 0 && cd.length > 0 && ci.length > 0 && cr.length > 0;
}
