/**
 * words — Style Shelf's texts in English, French and Spanish (the host's three
 * first languages); any other language reads English. Inside Mnemosyne the
 * host says the language; on its own the app reads the browser's.
 *
 * The tone of the settings pages: nobody is addressed (no tu, no vous), labels
 * of one or two words, infinitives, no paragraph.
 *
 * @module i18n/words
 */

const EN = {
  appTitle: 'Style Shelf',
  host: { standalone: 'Browser', foreign: 'Embedded', mnemosyne: 'Mnemosyne OS', pending: 'Looking for Mnemosyne', site: 'mnemosyne-os.io: the OS this app comes from' },
  kinds: {
    label: 'Kinds', all: 'All', favorites: 'Favourites', style: 'Styles', button: 'Buttons', card: 'Cards', input: 'Fields',
    badge: 'Badges', alert: 'Alerts', tooltip: 'Tooltips', menu: 'Menus', table: 'Tables', placeholder: 'Loading skeletons',
    motion: 'Motion', background: 'Backgrounds', icons: 'Icons', engine: 'Engines',
  },
  kindOne: {
    style: 'Style', button: 'Button', card: 'Card', input: 'Field', badge: 'Badge', alert: 'Alert', tooltip: 'Tooltip', menu: 'Menu', table: 'Table', placeholder: 'Loading skeleton',
    motion: 'Motion', background: 'Background', icons: 'Icon pack', engine: 'Animation engine',
  },
  view: { label: 'Tile size', small: 'Overview', medium: 'Medium tiles', large: 'Large tiles' },
  tile: {
    add: 'Add {name} to the cart', remove: 'Take {name} out of the cart', choose: 'Choose the style {name}', chosen: 'Chosen style',
    premium: 'Premium', preview: 'Preview of {name}', hover: 'Hover to play',
    adapt: 'Adapt {name}', edit: 'Edit {name}', personal: 'Mine', loading: 'Loading',
    proposedBy: 'Proposed by {name} on GitHub', favorite: 'Add {name} to the favourites', unfavorite: 'Take {name} out of the favourites',
    repainting: 'Applying the style, previews left: {n}',
  },
  cart: {
    open: 'Cart', title: 'Cart', close: 'Close the cart', style: 'Style', items: 'Elements', licenses: 'Licences',
    empty: 'Empty', needStyle: 'Choose a style', remove: 'Take {name} out',
    write: 'Write into the project', download: 'Download the kit', copyBrief: 'Copy the brief',
    copied: 'Copied', copyFailed: 'Copy refused: {detail}',
    writing: 'Writing', folder: 'Folder', files: 'Files', ide: 'IDE',
    written: '{count} files written', writeFailed: '{step} not written: {detail}', writtenBefore: '{count} files written before it',
    copyInstruction: 'Copy the instruction', instruction: 'Read style-shelf/BRIEF.md and apply this kit to the project.',
  },
  catalog: {
    refused: '{count} entries refused', dropped: '{count} items left the catalogue, taken out of the cart',
    empty: 'Nothing here',
  },
  studio: {
    title: 'Atelier', name: 'Name', author: 'Author', authorHint: 'Name, or @handle to be credited with your GitHub picture', basedOn: 'from {name}',
    keep: 'Keep', export: 'Export', propose: 'Propose', delete: 'Delete', confirmDelete: 'Confirm delete', close: 'Close the atelier',
    groupsLabel: 'Token groups', newName: 'My {name}',
    groups: { accent: 'Accent', grounds: 'Grounds', text: 'Text', shapes: 'Shapes', depth: 'Depth', motion: 'Motion', status: 'Status' },
    pairs: { text: 'Text', muted: 'Muted text', accentText: 'Accent text', onAccent: 'Text on accent' },
    ratio: '{ratio}:1, {min} expected', unmeasurable: 'not measurable', invalid: 'Not kept: {detail}',
  },
  personal: {
    import: 'Import a style', imported: 'Style {name} imported', importFailed: 'Import refused: {detail}',
    restored: '{count} personal styles restored from Mnemosyne OS', refused: '{count} personal styles unreadable, left out',
    mirrorFailed: 'Mnemosyne OS did not keep its copy: {detail}',
  },
  contrib: {
    tab: 'Contributions', catalogTab: 'Catalogue', views: 'Views', loading: 'Reading the pull requests',
    unavailable: 'List unavailable: {detail}', stale: 'List of {date}', empty: 'No contribution merged yet',
    by: 'by {author}', open: 'Open pull request #{number}',
    noAuthor: 'An author is needed to propose', tooLong: 'Too long to propose by link ({size} characters)', openFailed: 'GitHub did not open: {detail}', openHere: 'Open on GitHub',
  },
  premium: { label: 'Premium' },
  page: {
    open: 'Whole-page preview', title: 'Whole-page preview', copyTitle: 'What you copy', close: 'Close the preview',
    frame: 'A page drawn in the style', briefLabel: 'The brief', copy: 'Copy',
    fromCart: 'The {count} elements of the cart', allElements: 'Every element of the catalogue',
  },
  explain: {
    title: 'What happens',
    write: 'choose the folder of the project, as it is: no folder to create. Style Shelf creates {dir} in it by itself, with four files:',
    files: {
      kitJson: 'the style and the elements, with their code and licences, as data',
      tokensCss: 'the colours, radii, shadows and fonts of the style',
      elementsCss: 'the CSS of each element in the cart',
      briefMd: 'the instruction for the IDE agent (Claude Code, Cursor…), which adapts the kit to the project',
    },
    nothingElse: 'Nothing else in the project is read, changed or deleted. Writing again replaces these four files.',
    permission: 'The first time, Mnemosyne OS asks for the files permission: its wording is the same for every app that touches files. Refusing it writes nothing.',
    download: 'saves kit.json in the downloads folder.',
    copy: 'shows the page drawn in the theme beside the brief, then copies the brief to paste in the IDE. Needs no permission.',
  },
  hostCopy: { themes: 'Themes restored from Mnemosyne OS: {count}', favorites: 'Favourites restored from Mnemosyne OS: {count}',
    unreadable: 'The copy kept by Mnemosyne OS could not be read: changes stay on this page only ({detail})' },
  themes: {
    title: 'My themes', name: 'Theme name', save: 'Save as a theme', update: 'Update this theme', none: 'No theme yet',
    summary: '{style} · elements: {count}', load: 'Load {name}', delete: 'Delete {name}', confirm: 'Confirm: delete {name}',
    needStyle: 'A theme needs a style', styleGone: 'style no longer in the catalogue', dropped: 'Items of this theme gone from the catalogue: {count}', refused: 'Stored themes that could not be read: {count}',
  },
};

export type Dict = typeof EN;

const FR: Dict = {
  appTitle: 'Style Shelf',
  host: { standalone: 'Navigateur', foreign: 'Intégrée', mnemosyne: 'Mnemosyne OS', pending: 'Recherche de Mnemosyne', site: "mnemosyne-os.io : l'OS d'où vient cette app" },
  kinds: {
    label: 'Catégories', all: 'Tout', favorites: 'Favoris', style: 'Styles', button: 'Boutons', card: 'Cartes', input: 'Champs',
    badge: 'Badges', alert: 'Alertes', tooltip: 'Infobulles', menu: 'Menus', table: 'Tableaux', placeholder: 'Squelettes de chargement',
    motion: 'Motion', background: 'Fonds', icons: 'Icônes', engine: 'Moteurs',
  },
  kindOne: {
    style: 'Style', button: 'Bouton', card: 'Carte', input: 'Champ', badge: 'Badge', alert: 'Alerte', tooltip: 'Infobulle', menu: 'Menu', table: 'Tableau', placeholder: 'Squelette de chargement',
    motion: 'Motion', background: 'Fond', icons: "Pack d'icônes", engine: "Moteur d'animation",
  },
  view: { label: 'Taille des tuiles', small: "Vue d'ensemble", medium: 'Tuiles moyennes', large: 'Grandes tuiles' },
  tile: {
    add: 'Ajouter {name} au panier', remove: 'Retirer {name} du panier', choose: 'Choisir le style {name}', chosen: 'Style choisi',
    premium: 'Premium', preview: 'Aperçu de {name}', hover: 'Survoler pour jouer',
    adapt: 'Adapter {name}', edit: 'Modifier {name}', personal: 'Perso', loading: 'Chargement',
    proposedBy: 'Proposé par {name} sur GitHub', favorite: 'Ajouter {name} aux favoris', unfavorite: 'Retirer {name} des favoris',
    repainting: 'Application du style, aperçus restants : {n}',
  },
  cart: {
    open: 'Panier', title: 'Panier', close: 'Fermer le panier', style: 'Style', items: 'Éléments', licenses: 'Licences',
    empty: 'Vide', needStyle: 'Choisir un style', remove: 'Retirer {name}',
    write: 'Écrire dans le projet', download: 'Télécharger le kit', copyBrief: 'Copier le brief',
    copied: 'Copié', copyFailed: 'Copie refusée : {detail}',
    writing: 'Écriture', folder: 'Dossier', files: 'Fichiers', ide: 'IDE',
    written: '{count} fichiers écrits', writeFailed: '{step} non écrit : {detail}', writtenBefore: '{count} fichiers écrits avant',
    copyInstruction: 'Copier la consigne', instruction: 'Lire style-shelf/BRIEF.md et appliquer ce kit au projet.',
  },
  catalog: {
    refused: '{count} entrées refusées', dropped: '{count} éléments sortis du catalogue, retirés du panier',
    empty: 'Rien ici',
  },
  studio: {
    title: 'Atelier', name: 'Nom', author: 'Auteur', authorHint: 'Nom, ou @pseudo pour être crédité avec sa photo GitHub', basedOn: 'à partir de {name}',
    keep: 'Garder', export: 'Exporter', propose: 'Proposer', delete: 'Supprimer', confirmDelete: 'Confirmer', close: "Fermer l'atelier",
    groupsLabel: 'Groupes de jetons', newName: 'Mon {name}',
    groups: { accent: 'Accent', grounds: 'Fonds', text: 'Texte', shapes: 'Formes', depth: 'Relief', motion: 'Mouvement', status: 'Statuts' },
    pairs: { text: 'Texte', muted: 'Texte discret', accentText: "Texte d'accent", onAccent: "Texte sur l'accent" },
    ratio: '{ratio}:1, {min} attendu', unmeasurable: 'non mesurable', invalid: 'Non gardé : {detail}',
  },
  personal: {
    import: 'Importer un style', imported: 'Style {name} importé', importFailed: 'Import refusé : {detail}',
    restored: '{count} styles personnels restaurés depuis Mnemosyne OS', refused: '{count} styles personnels illisibles, laissés de côté',
    mirrorFailed: "Mnemosyne OS n'a pas gardé sa copie : {detail}",
  },
  contrib: {
    tab: 'Contributions', catalogTab: 'Catalogue', views: 'Vues', loading: 'Lecture des pull requests',
    unavailable: 'Liste indisponible : {detail}', stale: 'Liste du {date}', empty: 'Aucune contribution fusionnée',
    by: 'par {author}', open: 'Ouvrir la pull request #{number}',
    noAuthor: 'Un auteur est nécessaire pour proposer', tooLong: 'Trop long pour une proposition par lien ({size} caractères)', openFailed: "GitHub ne s'est pas ouvert : {detail}", openHere: 'Ouvrir sur GitHub',
  },
  premium: { label: 'Premium' },
  page: {
    open: 'Aperçu de la page entière', title: 'Aperçu de la page entière', copyTitle: 'Ce que vous copiez', close: "Fermer l'aperçu",
    frame: 'Une page dessinée dans le style', briefLabel: 'Le brief', copy: 'Copier',
    fromCart: 'Les {count} éléments du panier', allElements: 'Tous les éléments du catalogue',
  },
  explain: {
    title: 'Ce qui va se passer',
    write: 'choisir le dossier du projet tel qu’il est : aucun dossier à créer. Style Shelf y crée {dir} tout seul, avec quatre fichiers :',
    files: {
      kitJson: 'le style et les éléments, avec leur code et leurs licences, en données',
      tokensCss: 'les couleurs, rayons, ombres et polices du style',
      elementsCss: 'le CSS de chaque élément du panier',
      briefMd: "la consigne pour l'agent de l'IDE (Claude Code, Cursor…), qui adapte le kit au projet",
    },
    nothingElse: 'Rien d’autre du projet n’est lu, modifié ni supprimé. Écrire à nouveau remplace ces quatre fichiers.',
    permission: 'La première fois, Mnemosyne OS demande la permission des fichiers : son texte est le même pour toutes les apps qui touchent aux fichiers. La refuser n’écrit rien.',
    download: 'enregistre kit.json dans le dossier des téléchargements.',
    copy: "montre la page dessinée dans le thème à côté du brief, puis copie le brief à coller dans l'IDE. Aucune permission.",
  },
  hostCopy: { themes: 'Thèmes restaurés depuis Mnemosyne OS : {count}', favorites: 'Favoris restaurés depuis Mnemosyne OS : {count}',
    unreadable: 'La copie gardée par Mnemosyne OS est illisible : les changements restent sur cette page seulement ({detail})' },
  themes: {
    title: 'Mes thèmes', name: 'Nom du thème', save: 'Enregistrer comme thème', update: 'Mettre à jour ce thème', none: 'Aucun thème pour le moment',
    summary: '{style} · éléments : {count}', load: 'Charger {name}', delete: 'Supprimer {name}', confirm: 'Confirmer : supprimer {name}',
    needStyle: 'Un thème demande un style', styleGone: 'style sorti du catalogue', dropped: 'Éléments de ce thème sortis du catalogue : {count}', refused: 'Thèmes enregistrés illisibles : {count}',
  },
};

const ES: Dict = {
  appTitle: 'Style Shelf',
  host: { standalone: 'Navegador', foreign: 'Integrada', mnemosyne: 'Mnemosyne OS', pending: 'Buscando Mnemosyne', site: 'mnemosyne-os.io: el OS del que viene esta app' },
  kinds: {
    label: 'Categorías', all: 'Todo', favorites: 'Favoritos', style: 'Estilos', button: 'Botones', card: 'Tarjetas', input: 'Campos',
    badge: 'Insignias', alert: 'Alertas', tooltip: 'Tooltips', menu: 'Menús', table: 'Tablas', placeholder: 'Esqueletos de carga',
    motion: 'Motion', background: 'Fondos', icons: 'Iconos', engine: 'Motores',
  },
  kindOne: {
    style: 'Estilo', button: 'Botón', card: 'Tarjeta', input: 'Campo', badge: 'Insignia', alert: 'Alerta', tooltip: 'Tooltip', menu: 'Menú', table: 'Tabla', placeholder: 'Esqueleto de carga',
    motion: 'Motion', background: 'Fondo', icons: 'Pack de iconos', engine: 'Motor de animación',
  },
  view: { label: 'Tamaño de las fichas', small: 'Vista general', medium: 'Fichas medianas', large: 'Fichas grandes' },
  tile: {
    add: 'Añadir {name} al carrito', remove: 'Quitar {name} del carrito', choose: 'Elegir el estilo {name}', chosen: 'Estilo elegido',
    premium: 'Premium', preview: 'Vista previa de {name}', hover: 'Pasar el puntero para reproducir',
    adapt: 'Adaptar {name}', edit: 'Editar {name}', personal: 'Mío', loading: 'Cargando',
    proposedBy: 'Propuesto por {name} en GitHub', favorite: 'Añadir {name} a favoritos', unfavorite: 'Quitar {name} de favoritos',
    repainting: 'Aplicando el estilo, vistas previas restantes: {n}',
  },
  cart: {
    open: 'Carrito', title: 'Carrito', close: 'Cerrar el carrito', style: 'Estilo', items: 'Elementos', licenses: 'Licencias',
    empty: 'Vacío', needStyle: 'Elegir un estilo', remove: 'Quitar {name}',
    write: 'Escribir en el proyecto', download: 'Descargar el kit', copyBrief: 'Copiar el brief',
    copied: 'Copiado', copyFailed: 'Copia rechazada: {detail}',
    writing: 'Escritura', folder: 'Carpeta', files: 'Archivos', ide: 'IDE',
    written: '{count} archivos escritos', writeFailed: '{step} no escrito: {detail}', writtenBefore: '{count} archivos escritos antes',
    copyInstruction: 'Copiar la instrucción', instruction: 'Leer style-shelf/BRIEF.md y aplicar este kit al proyecto.',
  },
  catalog: {
    refused: '{count} entradas rechazadas', dropped: '{count} elementos salieron del catálogo, quitados del carrito',
    empty: 'Nada aquí',
  },
  studio: {
    title: 'Taller', name: 'Nombre', author: 'Autor', authorHint: 'Nombre, o @usuario para aparecer con la foto de GitHub', basedOn: 'a partir de {name}',
    keep: 'Guardar', export: 'Exportar', propose: 'Proponer', delete: 'Eliminar', confirmDelete: 'Confirmar', close: 'Cerrar el taller',
    groupsLabel: 'Grupos de tokens', newName: 'Mi {name}',
    groups: { accent: 'Acento', grounds: 'Fondos', text: 'Texto', shapes: 'Formas', depth: 'Relieve', motion: 'Movimiento', status: 'Estados' },
    pairs: { text: 'Texto', muted: 'Texto discreto', accentText: 'Texto de acento', onAccent: 'Texto sobre el acento' },
    ratio: '{ratio}:1, {min} esperado', unmeasurable: 'no medible', invalid: 'No guardado: {detail}',
  },
  personal: {
    import: 'Importar un estilo', imported: 'Estilo {name} importado', importFailed: 'Importación rechazada: {detail}',
    restored: '{count} estilos personales restaurados desde Mnemosyne OS', refused: '{count} estilos personales ilegibles, apartados',
    mirrorFailed: 'Mnemosyne OS no guardó su copia: {detail}',
  },
  contrib: {
    tab: 'Contribuciones', catalogTab: 'Catálogo', views: 'Vistas', loading: 'Leyendo las pull requests',
    unavailable: 'Lista no disponible: {detail}', stale: 'Lista del {date}', empty: 'Ninguna contribución fusionada todavía',
    by: 'por {author}', open: 'Abrir la pull request #{number}',
    noAuthor: 'Hace falta un autor para proponer', tooLong: 'Demasiado largo para proponer por enlace ({size} caracteres)', openFailed: 'GitHub no se abrió: {detail}', openHere: 'Abrir en GitHub',
  },
  premium: { label: 'Premium' },
  page: {
    open: 'Vista previa de página completa', title: 'Vista previa de página completa', copyTitle: 'Lo que copia', close: 'Cerrar la vista previa',
    frame: 'Una página dibujada en el estilo', briefLabel: 'El brief', copy: 'Copiar',
    fromCart: 'Los {count} elementos del carrito', allElements: 'Todos los elementos del catálogo',
  },
  explain: {
    title: 'Qué va a pasar',
    write: 'elegir la carpeta del proyecto tal como está: no hay que crear ninguna carpeta. Style Shelf crea {dir} en ella por sí mismo, con cuatro archivos:',
    files: {
      kitJson: 'el estilo y los elementos, con su código y sus licencias, como datos',
      tokensCss: 'los colores, radios, sombras y fuentes del estilo',
      elementsCss: 'el CSS de cada elemento del carrito',
      briefMd: 'la instrucción para el agente del IDE (Claude Code, Cursor…), que adapta el kit al proyecto',
    },
    nothingElse: 'Nada más del proyecto se lee, cambia ni borra. Escribir de nuevo reemplaza estos cuatro archivos.',
    permission: 'La primera vez, Mnemosyne OS pide el permiso de archivos: su texto es el mismo para todas las apps que tocan archivos. Rechazarlo no escribe nada.',
    download: 'guarda kit.json en la carpeta de descargas.',
    copy: 'muestra la página dibujada en el tema junto al brief, y luego copia el brief para pegarlo en el IDE. Sin permiso.',
  },
  hostCopy: { themes: 'Temas restaurados desde Mnemosyne OS: {count}', favorites: 'Favoritos restaurados desde Mnemosyne OS: {count}',
    unreadable: 'La copia guardada por Mnemosyne OS no se pudo leer: los cambios se quedan solo en esta página ({detail})' },
  themes: {
    title: 'Mis temas', name: 'Nombre del tema', save: 'Guardar como tema', update: 'Actualizar este tema', none: 'Aún no hay temas',
    summary: '{style} · elementos: {count}', load: 'Cargar {name}', delete: 'Eliminar {name}', confirm: 'Confirmar: eliminar {name}',
    needStyle: 'Un tema necesita un estilo', styleGone: 'estilo fuera del catálogo', dropped: 'Elementos de este tema fuera del catálogo: {count}', refused: 'Temas guardados ilegibles: {count}',
  },
};

const DICTS: Record<string, Dict> = { en: EN, fr: FR, es: ES };

export function words(lang: string | undefined): Dict {
  return DICTS[(lang ?? 'en').slice(0, 2).toLowerCase()] ?? EN;
}

/** « {name} » → the value put in; a placeholder without a value stays as written. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m));
}

/** The name of an entry in the language of the dictionary's code. */
export function titleIn(title: { en: string; fr: string; es: string }, lang: string | undefined): string {
  const code = (lang ?? 'en').slice(0, 2).toLowerCase();
  return code === 'fr' ? title.fr : code === 'es' ? title.es : title.en;
}
