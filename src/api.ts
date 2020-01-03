/*
   [POST] books/                                      - return id // {file: ... }
  *[GET]  books/                                      - return list of books {id: 1, title: "...", cover: "..."}
   [GET]  books/{idBook}/read/?page=1                 - return obj page
   [GET]  books/{idBook}/selections/                  - return array selections ['dat', 'waren']
   [POST] books/{idBook}/selections/                  - return {index: 1, selection: 'waren', page: 23, translation: 'foram'}    // {bookId: 1, index: 1, word: 'waren', page: 23}
  *[DEL]  books/{idBook}/selections/{idSelection}     - return success
*/
// ----> USER faz upload do livro no front e envio pro back
// back recebe livro quebra em páginas e grava no banco em duas tabelas (infos do livro com titulo total de páginas, autor e outros detales, e em outra tabela o livro com as páginas)
// back retorna id do livro
// front redireciona para página de carregamento do livro
// front verifica se já foi carregado lista de todas as palavras selecionadas
// se não foi buscada a lista de todas as palavras selecionadas
// front busca [get] e grava local a lista e marca como carregada a lista de todas as palavras selecionadas
// back só seleciona a lista de todas palavras selecionadas e retorna
// se já foi buscada a lista de todas as palavras selecionadas
// front solicita primeira página
// back resgata primeira página, e junta com palavras clicadas para tradução na página solicitada e total de páginas da tabela de infos do livro
// front recebe página e verifica se existe alguma palavra nesta página que está na lista de todas as palavras selecionadas e também mostra a tradução das palavras vinda da api

// ----> USER marca palavra
// front add em lista local de todas palavras selecionadas
// front envia [post] pro back
// back traduz, marca em lista de todas as palavras selecionadas (se não exisitir)
// back grava palavra em lista de palavras traduzidas com a página e index
// back retorna tradução
// front recebe tradução e index e marca na página

// ----> USER remove palavra
// front remove marcação da lista de todas as palavras selecionadas
// front envia post da palavra a ser removida palavra
// front desmarca todas as palavras da página atual caso exista selecioção ativa
// back remove palavra da lista de todas as palavras
// back remove palavra da lista de palavras traduzidas
// back retorna remoção com efetuada com sucesso

// controle advice rest controller !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const selections = ["dat", "waren"]

//[GET]  books/{idBook}/read/?page=1

const read = {
  text:
    "In de Ligusterlaan, op nummer 4, woonden meneer en mevrouw Duffeling. Ze waren er trots op dat ze doodnormaal waren en als a ooit mensen waren geweest van wie je zou denken dat ze nooit bij iets vreemds of geheimzinnigs betrokken zouden raken waren zij het wel, want voor dat soort onzin hadden ze geen tijd. Meneer Duffeling was directeur van Drillings, een boormachinefabriek. Hij was groot",
  page: 1,
  totalPages: 300,
  selections: [
    {
      index: [2],
      translation: "que",
      label: "dat"
    },
    {
      index: [2],
      translation: "foram",
      label: "waren"
    },
    {}
  ]
}

//

export { read, selections }
