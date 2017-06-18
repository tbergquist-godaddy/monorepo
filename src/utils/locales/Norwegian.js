export const norwegian = {
  general: {
    altText: 'Bilde mangler',
    submit: 'Send inn',
  },
  components: {
    AddToFavorites: {
      addToFavorites: 'Legg til i favoritter',
      isFavorite: 'Serien er allerede i dine favoritter',
    },
    Cast: {
      cast: 'Skuespillere',
    },
    CastItem: {
      character: 'Karakter',
      actor: 'Skuespiller',
    },
    EpisodeTable: {
      seasonEpisode: 'Sesong/Episode',
      name: 'Navn',
      airdate: 'Vist dato',
      summary: 'Sammendrag'
    },
    FavoritesTable: {
      name: 'Navn',
      status: 'Status',
      latestEpisode: 'Forrige episode',
      nextEpisode: 'Neste episode'
    },
    FavoritesTableRow: {
      confirmDelete: 'Er du sikker på at du vil slette',
      unkown: 'Ukjent'
    },
    Header: {
      logout: 'Logg ut',
      favorites: 'Favoritter',
      login: 'Logg inn',
      search: 'Søk'
    },
    SerieTable: {
      name: 'Navn',
      status: 'Status',
      score: 'Poeng'
    }
  },
  containers: {
    FavoritesPage: {
      myFavorites: 'Mine Favoritter',
      loadFavoritesError: 'En feil oppstod ved lastning av favoritter'
    },
    LoginForm: {
      loginError: 'Feil brukernavn eller passord',
      username: 'Brukernavn',
      password: 'Passord',
      login: 'Logg inn',
      noAccount: 'Har du ikke konto? ',
      signUp: 'opprett konto'
    },
    SearchForm: {
      search: 'Søk',
      tvShow: 'Tv serie'
    },
    SearchPage: {
      searchResult: 'Søkeresultat',
      search: 'Søk',
    },
    CreateAccountPage: {
      header: 'Opprett konto'
    },
    CreateAccountForm: {
      username: 'Brukernavn',
      email: 'E-mail',
      password: 'Passord',
      confirmPassword: 'Bekreft passord',
      successMessage: 'Brukeren ble opprettet',
      errorMessage: 'Kunne ikke opprette bruker'
    }
  }
};
