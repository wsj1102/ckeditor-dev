﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * French language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang[ 'fr' ] = {
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir: 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle: 'Rich text editor, %1', // MISSING

	// Toolbar buttons without dialogs.
	source: 'Source',
	newPage: 'Nouvelle page',
	save: 'Sauver',
	preview: 'Aperçu',
	cut: 'Couper',
	copy: 'Copier',
	paste: 'Coller',
	print: 'Imprimer',
	underline: 'Souligné',
	bold: 'Gras',
	italic: 'Italique',
	selectAll: 'Tout sélectionner',
	removeFormat: 'Supprimer la mise en forme',
	strike: 'Barré',
	subscript: 'Indice',
	superscript: 'Exposant',
	horizontalrule: 'Ligne horizontale',
	pagebreak: 'Saut de page',
	unlink: 'Supprimer le lien',
	undo: 'Annuler',
	redo: 'Rétablir',

	// Common messages and labels.
	common: {
		browseServer: 'Explorer le serveur',
		url: 'URL',
		protocol: 'Protocole',
		upload: 'Envoyer',
		uploadSubmit: 'Envoyer sur le serveur',
		image: 'Image',
		flash: 'Flash',
		form: 'Formulaire',
		checkbox: 'Case à cocher',
		radio: 'Bouton Radio',
		textField: 'Champ texte',
		textarea: 'Zone de texte',
		hiddenField: 'Champ caché',
		button: 'Bouton',
		select: 'Liste déroulante',
		imageButton: 'Bouton image',
		notSet: '<non défini>',
		id: 'Id',
		name: 'Nom',
		langDir: 'Sens d\'écriture',
		langDirLtr: 'Gauche à droite (LTR)',
		langDirRtl: 'Droite à gauche (RTL)',
		langCode: 'Code de langue',
		longDescr: 'URL de longue description (longdesc => malvoyant)',
		cssClass: 'Classe CSS',
		advisoryTitle: 'Description (title)',
		cssStyle: 'Style',
		ok: 'OK',
		cancel: 'Annuler',
		generalTab: 'General',
		advancedTab: 'Avancé',
		validateNumberFailed: 'Cette valeur n\'est pas un nombre.',
		confirmNewPage: 'Les changements non sauvegardés seront perdus. Etes-vous sur de voiloir charger une nouvelle page ?',
		confirmCancel: 'Certaines options ont été modifiées. Etes-vous sur de vouloir fermer ?'
	},

	// Special char dialog.
	specialChar: {
		toolbar: 'Insérer un caractère spécial',
		title: 'Sélectionnez un caractère'
	},

	// Link dialog.
	link: {
		toolbar: 'Lien', // IE6 BUG: A title called "Link" in an <A> tag would invalidate its padding!!
		menu: 'Editer le lien',
		title: 'Lien',
		info: 'Infos sur le lien',
		target: 'Cible',
		upload: 'Envoyer',
		advanced: 'Avancé',
		type: 'Type de lien',
		toAnchor: 'Transformer le lien en ancre dans le texte',
		toEmail: 'E-mail',
		target: 'Cible',
		targetNotSet: '<non définie>',
		targetFrame: '<frame>',
		targetPopup: '<fenêtre popup>',
		targetNew: 'Nouvelle fenêtre (_blank)',
		targetTop: 'Même fenêtre (_top)',
		targetSelf: 'Même Frame (_self)',
		targetParent: 'Fenêtre parente (_parent)',
		targetFrameName: 'Nom de la Frame cible',
		targetPopupName: 'Nom de la fenêtre popup',
		popupFeatures: 'Options de la fenêtre popup',
		popupResizable: 'Redimensionnable',
		popupStatusBar: 'Barre de status',
		popupLocationBar: 'Barre d\'adresse',
		popupToolbar: 'Barre d\'outils',
		popupMenuBar: 'Barre de menu',
		popupFullScreen: 'Plein écran (IE)',
		popupScrollBars: 'Barres de défillement',
		popupDependent: 'Dépendante (Netscape)',
		popupWidth: 'Largeur',
		popupLeft: 'Position gauche',
		popupHeight: 'Hauteur',
		popupTop: 'Position haute',
		id: 'Id',
		langDir: 'Sens d\'écriture',
		langDirNotSet: '<non défini>',
		langDirLTR: 'Gauche à droite',
		langDirRTL: 'Droite à gauche',
		acccessKey: 'Touche daccessibilité',
		name: 'Nom',
		langCode: 'Code de langue',
		tabIndex: 'Index de tabulation',
		advisoryTitle: 'Description (title)',
		advisoryContentType: 'Type de contenu (ex: text/html)',
		cssClasses: 'Classe du CSS',
		charset: 'Charset de la cible',
		styles: 'Style',
		selectAnchor: 'Selectionner l\'ancre',
		anchorName: 'Par nom d\'ancre',
		anchorId: 'Par ID d\'élément',
		emailAddress: 'Adresse E-Mail',
		emailSubject: 'Sujet du message',
		emailBody: 'Corps du message',
		noAnchors: '(Aucune ancre disponible dans ce document)',
		noUrl: 'Veuillez entrer l\'adresse du lien',
		noEmail: 'Veuillez entrer l\'adresse e-mail'
	},

	// Anchor dialog
	anchor: {
		toolbar: 'Ancre',
		menu: 'Editer l\'ancre',
		title: 'Propriétés de l\'ancre',
		name: 'Nom de l\'ancre',
		errorName: 'Veuillez entrer le nom de l\'ancre'
	},

	// Find And Replace Dialog
	findAndReplace: {
		title: 'Trouver et remplacer',
		find: 'Trouver',
		replace: 'Remplacer',
		findWhat: 'Expression à trouver : ',
		replaceWith: 'Remplacer par : ',
		notFoundMsg: 'Le texte spécifié ne peut être trouvé.',
		matchCase: 'Respecter la casse',
		matchWord: 'Mot entier uniquement',
		matchCyclic: 'Boucler',
		replaceAll: 'Remplacer tout',
		replaceSuccessMsg: '%1 occurrence(s) replacée(s).'
	},

	// Table Dialog
	table: {
		toolbar: 'Tableau',
		title: 'Propriétés du tableau',
		menu: 'Propriétés du tableau',
		deleteTable: 'Supprimer le tableau',
		rows: 'Lignes',
		columns: 'Colonnes',
		border: 'Taille de la bordure',
		align: 'Alignment du contenu',
		alignNotSet: '<non définie>',
		alignLeft: 'Gauche',
		alignCenter: 'Centré',
		alignRight: 'Droite',
		width: 'Largeur',
		widthPx: 'pixels',
		widthPc: '% pourcents',
		height: 'Hauteur',
		cellSpace: 'Espacement des cellules',
		cellPad: 'Marge interne des cellules',
		caption: 'Titre du tableau',
		summary: 'Résumé (description)',
		headers: 'En-Têtes',
		headersNone: 'Aucunes',
		headersColumn: 'Première colonne',
		headersRow: 'Première ligne',
		headersBoth: 'Les deux',
		invalidRows: 'Le nombre de lignes doit être supérieur à 0.',
		invalidCols: 'Le nombre de colonnes doit être supérieur à 0.',
		invalidBorder: 'La taille de la bordure doit être un nombre.',
		invalidWidth: 'La largeur du tableau doit être un nombre.',
		invalidHeight: 'La hauteur du tableau doit être un nombre.',
		invalidCellSpacing: 'L\'espacement des cellules doit être un nombre.',
		invalidCellPadding: 'La marge intérieure des cellules doit être un nombre.',

		cell: {
			menu: 'Cellule',
			insertBefore: 'Insérer une cellule avant',
			insertAfter: 'Inserer une cellule après',
			deleteCell: 'Supprimer les cellules',
			merge: 'Fusionner les cellules',
			mergeRight: 'Fusionner à droite',
			mergeDown: 'Fusionner en bas',
			splitHorizontal: 'Fractionner horizontallement',
			splitVertical: 'Fractionner verticallement',
			title: 'Cell Properties', // MISSING
			cellType: 'Cell Type', // MISSING
			rowSpan: 'Rows Span', // MISSING
			colSpan: 'Columns Span', // MISSING
			wordWrap: 'Word Wrap', // MISSING
			hAlign: 'Horizontal Alignment', // MISSING
			vAlign: 'Vertical Alignment', // MISSING
			alignTop: 'Top', // MISSING
			alignMiddle: 'Middle', // MISSING
			alignBottom: 'Bottom', // MISSING
			alignBaseline: 'Baseline', // MISSING
			bgColor: 'Background Color', // MISSING
			borderColor: 'Border Color', // MISSING
			data: 'Data', // MISSING
			header: 'Header', // MISSING
			yes: 'Yes', // MISSING
			no: 'No', // MISSING
			invalidWidth: 'Cell width must be a number.', // MISSING
			invalidHeight: 'Cell height must be a number.', // MISSING
			invalidRowSpan: 'Rows span must be a whole number.', // MISSING
			invalidColSpan: 'Columns span must be a whole number.' // MISSING
		},

		row: {
			menu: 'Ligne',
			insertBefore: 'Insérer une ligne avant',
			insertAfter: 'Inserer une ligne après',
			deleteRow: 'Supprimer les lignes'
		},

		column: {
			menu: 'Colonnes',
			insertBefore: 'Inserer une colonne avant',
			insertAfter: 'Inserer une colonne après',
			deleteColumn: 'Supprimer les colonnes'
		}
	},

	// Button Dialog.
	button: {
		title: 'Propriétés du bouton',
		text: 'Texte (Value)',
		type: 'Type',
		typeBtn: 'Bouton',
		typeSbm: 'Validation (submit)',
		typeRst: 'Remise à zéro'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio: {
		checkboxTitle: 'Propriétés de la case à cocher',
		radioTitle: 'Propriétés du bouton Radio',
		value: 'Valeur',
		selected: 'Selectionné'
	},

	// Form Dialog.
	form: {
		title: 'Propriétés du formulaire',
		menu: 'Propriétés du formulaire',
		action: 'Action',
		method: 'Méthode',
		encoding: 'Encodage',
		target: 'Cible',
		targetNotSet: '<non définie>',
		targetNew: 'Nouvelle fenêtre (_blank)',
		targetTop: 'Même fenêtre (_top)',
		targetSelf: 'Même Frame (_self)',
		targetParent: 'Fenêtre parente (_parent)'
	},

	// Select Field Dialog.
	select: {
		title: 'Propriétés du menu déroulant',
		selectInfo: 'Informations sur le menu déroulant',
		opAvail: 'Options disponibles',
		value: 'Valeur',
		size: 'Taille',
		lines: 'Lignes',
		chkMulti: 'Permettre les sélections multiples',
		opText: 'Texte',
		opValue: 'Valeur',
		btnAdd: 'Ajouter',
		btnModify: 'Modifier',
		btnUp: 'Haut',
		btnDown: 'Bas',
		btnSetValue: 'Définir comme valeur sélectionnée',
		btnDelete: 'Supprimer'
	},

	// Textarea Dialog.
	textarea: {
		title: 'Propriétés de la zone de texte',
		cols: 'Colonnes',
		rows: 'Lignes'
	},

	// Text Field Dialog.
	textfield: {
		title: 'Propriétés du champ texte',
		name: 'Nom',
		value: 'Valeur',
		charWidth: 'Taille des caractères',
		maxChars: 'Nombre maximum de caractères',
		type: 'Type',
		typeText: 'Texte',
		typePass: 'Mot de passe'
	},

	// Hidden Field Dialog.
	hidden: {
		title: 'Propriétés du champ caché',
		name: 'Nom',
		value: 'Valeur'
	},

	// Image Dialog.
	image: {
		title: 'Propriétés de l\'image',
		titleButton: 'Propriétés du bouton image',
		menu: 'Propriétés de l\'image',
		infoTab: 'Informations sur l\'image',
		btnUpload: 'Envoyer sur le serveur',
		url: 'URL',
		upload: 'Envoyer',
		alt: 'Texte de remplacement',
		width: 'Largeur',
		height: 'Hauteur',
		lockRatio: 'Garder les proportions',
		resetSize: 'Taille d\'origine',
		border: 'Bordure',
		hSpace: 'Espacement horizontal',
		vSpace: 'Espacement vertical',
		align: 'Alignement',
		alignLeft: 'Gauche',
		alignAbsBottom: 'Bas absolue',
		alignAbsMiddle: 'Milieu absolue',
		alignBaseline: 'Bas du texte',
		alignBottom: 'Bas',
		alignMiddle: 'Milieu',
		alignRight: 'Droite',
		alignTextTop: 'Haut du texte',
		alignTop: 'Haut',
		preview: 'Aperçu',
		alertUrl: 'Veuillez entrer l\'adresse de l\'image',
		linkTab: 'Lien',
		button2Img: 'Voulez vous transformer le bouton image sélectionné, en simple image ?',
		img2Button: 'Voulez vous transformer l\'image en bouton image ?'
	},

	// Flash Dialog
	flash: {
		properties: 'Propriétés du Flash',
		propertiesTab: 'Propriétés',
		title: 'Propriétés du Flash',
		chkPlay: 'Jouer automatiquement',
		chkLoop: 'Boucle',
		chkMenu: 'Activer le menu Flash',
		chkFull: 'Permettre le plein écran',
		scale: 'Echelle',
		scaleAll: 'Afficher tout',
		scaleNoBorder: 'Pas de bordure',
		scaleFit: 'Taille d\'origine',
		access: 'Accès aux scripts',
		accessAlways: 'Toujours',
		accessSameDomain: 'Même domaine',
		accessNever: 'Jamais',
		align: 'Alignement',
		alignLeft: 'Gauche',
		alignAbsBottom: 'Bas absolue',
		alignAbsMiddle: 'Milieu absolue',
		alignBaseline: 'Bas du texte',
		alignBottom: 'Bas',
		alignMiddle: 'Milieu',
		alignRight: 'Droite',
		alignTextTop: 'Haut du texte',
		alignTop: 'Dessus',
		quality: 'Qualité',
		windowMode: 'Mode fenêtre',
		flashvars: 'Variables du Flash',
		bgcolor: 'Couleur d\'arrière plan',
		width: 'Largeur',
		height: 'Hauteur',
		hSpace: 'Espacement horizontal',
		vSpace: 'Espacement vertical',
		validateSrc: 'L\'adresse ne dois pas être vide.',
		validateWidth: 'La largeur doit être un nombre.',
		validateHeight: 'La hauteur doit être un nombre.',
		validateHSpace: 'L\'espacement horizontal doit être un nombre.',
		validateVSpace: 'L\'espacement vertical doit être un nombre.'
	},

	// Speller Pages Dialog
	spellCheck: {
		toolbar: 'Vérifier l\'orthographe',
		title: 'Vérifier l\'orthographe',
		notAvailable: 'Désolé, le service est indisponnible actuellement.',
		errorLoading: 'Erreur du chargement du service depuis l\'hôte : %s.',
		notInDic: 'N\'existe pas dasn le dictionnaire',
		changeTo: 'Modifier pour',
		btnIgnore: 'Ignorer',
		btnIgnoreAll: 'Ignorer tout',
		btnReplace: 'Remplacer',
		btnReplaceAll: 'Remplacer tout',
		btnUndo: 'Annuler',
		noSuggestions: '- Aucunes sugestions -',
		progress: 'Vérification de l\'orthographe en cours...',
		noMispell: 'Vérification de l\'orthographe terminée : aucune erreur trouvée',
		noChanges: 'Vérification de l\'orthographe terminée : Aucun mot corrigé',
		oneChange: 'Vérification de l\'orthographe terminée : Un seul mot corrigé',
		manyChanges: 'Vérification de l\'orthographe terminée : %1 mots corrigés',
		ieSpellDownload: 'La vérification orthographique n\'est pas installée. Voulez-vous la télécharger maintenant ?'
	},

	smiley: {
		toolbar: 'Emoticon',
		title: 'Insérer un émoticon'
	},

	elementsPath: {
		eleTitle: '%1 éléments'
	},

	numberedlist: 'Insérer/Supprimer la liste numérotée',
	bulletedlist: 'Insérer/Supprimer la liste à puces',
	indent: 'Augmenter le retrait (tabulation)',
	outdent: 'Diminuer le retrait (tabulation)',

	justify: {
		left: 'Aligner à gauche',
		center: 'Centrer',
		right: 'Aligner à droite',
		block: 'Justifier'
	},

	blockquote: 'Citation',

	clipboard: {
		title: 'Coller',
		cutError: 'Les paramètres de sécurité de votre navigateur, ne permettent pas à l\'éditeur d\'exécuter automatiquement des opérations de coupage. Veuillez utiliser le raccourci clavier (Ctrl+X).',
		copyError: 'Les paramètres de sécurité de votre navigateur, ne permettent pas à l\'éditeur d\'exécuter automatiquement des opérations de copie. Veuillez utiliser le raccourci clavier (Ctrl+C).',
		pasteMsg: 'Veuillez coller le texte dans la zone suivante, en utilisant le raccourci clavier (<strong>Ctrl+V</strong>) et cliquez sur OK',
		securityMsg: 'A cause des paramètres de sécurité de votre navigateur, l\'éditeur n\'est pas en mesure d\'accéder directement à vos données contenues dans le presse-papier. Vous devriez réessayer de coller les données dans la fenêtre.'
	},

	pastefromword: {
		toolbar: 'Coller depuis Word',
		title: 'Coller depuis Word',
		advice: 'Veuillez coller le texte dans la zone suivante, en utilisant le raccourci clavier (<strong>Ctrl+V</strong>) et cliquez sur OK.',
		ignoreFontFace: 'Supprimer la définition des polices',
		removeStyle: 'Supprimer la défiition des styles'
	},

	pasteText: {
		button: 'Coller comme texte sans mise en forme',
		title: 'Coller comme texte sans mise en forme'
	},

	templates: {
		button: 'Modèles',
		title: 'Contenu des modèles',
		insertOption: 'Remplacer le contenu actuel',
		selectPromptMsg: 'Veuillez sélectionner le modèle pour l\'ouvrir dans l\'éditeur',
		emptyListMsg: '(Aucun modèle disponible)'
	},

	showBlocks: 'Afficher les blocs',

	stylesCombo: {
		label: 'Styles',
		voiceLabel: 'Styles', // MISSING
		panelVoiceLabel: 'Select a style', // MISSING
		panelTitle1: 'Styles de blocs',
		panelTitle2: 'Styles en ligne',
		panelTitle3: 'Styles d\'objet'
	},

	format: {
		label: 'Format',
		voiceLabel: 'Format', // MISSING
		panelTitle: 'Format de paragraphes',
		panelVoiceLabel: 'Select a paragraph format', // MISSING

		tag_p: 'Normal',
		tag_pre: 'Formatté',
		tag_address: 'Adresse',
		tag_h1: 'Titre 1',
		tag_h2: 'Titre 2',
		tag_h3: 'Titre 3',
		tag_h4: 'Titre 4',
		tag_h5: 'Titre 5',
		tag_h6: 'Titre 6',
		tag_div: 'Normal (DIV)'
	},

	font: {
		label: 'Police',
		voiceLabel: 'Font', // MISSING
		panelTitle: 'Style de police',
		panelVoiceLabel: 'Select a font' // MISSING
	},

	fontSize: {
		label: 'Taille',
		voiceLabel: 'Font Size', // MISSING
		panelTitle: 'Taille de police',
		panelVoiceLabel: 'Select a font size' // MISSING
	},

	colorButton: {
		textColorTitle: 'Couleur de texte',
		bgColorTitle: 'Couleur d\'arrière plan',
		auto: 'Automatique',
		more: 'Plus de couleurs...'
	},

	colors: {
		'000': 'Black',
		'800000': 'Maroon',
		'8B4513': 'Saddle Brown',
		'2F4F4F': 'Dark Slate Gray',
		'008080': 'Teal',
		'000080': 'Navy',
		'4B0082': 'Indigo',
		'696969': 'Dim Gray',
		'B22222': 'Fire Brick',
		'A52A2A': 'Brown',
		'DAA520': 'Golden Rod',
		'006400': 'Dark Green',
		'40E0D0': 'Turquoise',
		'0000CD': 'Medium Blue',
		'800080': 'Purple',
		'808080': 'Gray',
		'F00': 'Red',
		'FF8C00': 'Dark Orange',
		'FFD700': 'Gold',
		'008000': 'Green',
		'0FF': 'Cyan',
		'00F': 'Blue',
		'EE82EE': 'Violet',
		'A9A9A9': 'Dark Gray',
		'FFA07A': 'Light Salmon',
		'FFA500': 'Orange',
		'FFFF00': 'Yellow',
		'00FF00': 'Lime',
		'AFEEEE': 'Pale Turquoise',
		'ADD8E6': 'Light Blue',
		'DDA0DD': 'Plum',
		'D3D3D3': 'Light Grey',
		'FFF0F5': 'Lavender Blush',
		'FAEBD7': 'Antique White',
		'FFFFE0': 'Light Yellow',
		'F0FFF0': 'Honeydew',
		'F0FFFF': 'Azure',
		'F0F8FF': 'Alice Blue',
		'E6E6FA': 'Lavender',
		'FFF': 'White'
	},

	scayt: {
		title: 'Spell Check As You Type', // MISSING
		enable: 'Enable SCAYT', // MISSING
		disable: 'Disable SCAYT', // MISSING
		about: 'About SCAYT', // MISSING
		toggle: 'Toggle SCAYT', // MISSING
		options: 'Options', // MISSING
		langs: 'Languages', // MISSING
		moreSuggestions: 'More suggestions', // MISSING
		ignore: 'Ignore', // MISSING
		ignoreAll: 'Ignore All', // MISSING
		addWord: 'Add Word', // MISSING
		emptyDic: 'Dictionary name should not be empty.', // MISSING
		optionsTab: 'Options', // MISSING
		languagesTab: 'Languages', // MISSING
		dictionariesTab: 'Dictionaries', // MISSING
		aboutTab: 'About' // MISSING
	},

	about: {
		title: 'About CKEditor', // MISSING
		moreInfo: 'For licensing information please visit our web site:', // MISSING
		copy: 'Copyright &copy; $1. All rights reserved.' // MISSING
	},

	maximize: 'Maximize' // MISSING
};
