
export async function renderAllAlbuns(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }
      const data = await response.json();
      return data;
    } catch (error) {
       new Error('Erro na solicitação:', error);
    }
  }
