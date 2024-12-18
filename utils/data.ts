export function dataMask(value: string) {
  // Remove todos os caracteres não numéricos
  value = value.replace(/\D/g, "");
  
  if (value.length <= 2) {
    // Adiciona a barra após os dois primeiros dígitos
    return value.length === 2 ? `${value}/` : value;
  } else if (value.length <= 4) {
    // Adiciona a segunda parte da data
    return `${value.slice(0, 2)}/${value.slice(2)}`;
  } else {
    // Formata como DD/MM/AAAA
    return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
  }
}