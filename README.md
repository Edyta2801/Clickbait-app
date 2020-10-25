# Clickbait app
Napisz mini serwis informacyjny, czyli aplikację, która posiada dane w postaci tablicy obiektów np.:

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]
Dane możesz (jeszcze) przechowywać w komponencie App. Na podstawie danych zrób iterację po elementach tablicy, aby wyświetlić każdy pojedynczy artykuł. Do wyświetlenia artykułów możesz wykorzystać tagi div, h2, oraz p np.:

<div>
  <h2>Tytuł</h2>
  <p>Intro</p>
</div>
Jeżeli intro jest dłuższe niż 25 znaków, wówczas wyświetl pierwsze 25 znaków, a następnie 3 kropki: .... Przykład: Po przegranym zakładzie z...

Następnie stwórz nowy komponent np. BlogTile, który wykorzystasz do wyświetlenia każdego pojedynczego wpisu w iteracji.

W aplikacji wykorzystaj stylowanie, ale spróbuj to zrobić za pomocą JavaScript (w CSS będzie zbyt łatwo ;).