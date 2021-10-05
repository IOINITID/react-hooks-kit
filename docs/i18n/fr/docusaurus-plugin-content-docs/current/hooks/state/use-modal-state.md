---
sidebar_position: 1
---

# useModalState

## A quoi a-t-il besoin pour

Vous pouvez l'utiliser pour gérer l'état de vos modaux plus rapidement et de manière plus flexible. À la fois nos propres bibliothèques et des bibliothèques prêtes à l'emploi.

## Avantages

Lorsque nous écrivons des modaux, beaucoup de code passe-partout est créé, par exemple, pour créer des états pour travailler avec une fenêtre modale, nous devons écrire quelque chose comme ceci:

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Composant bouton
  <Button onClick={onOpen}>Ouvrir la fenêtre modale</Button>

  // Composant de fenêtre modale
  <Modal isOpen={isOpen} onClose={onClose}>
    // Code de composant...
  </Modal>
};
```

À partir de l'exemple ci-dessus, vous pouvez voir combien il faut écrire pour gérer un seul état. En utilisant **useModalState**, vous n'avez pas besoin d'écrire de code supplémentaire ou de créer des états supplémentaires dans votre composant.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // Composant bouton
  <Button onClick={onOpen}>Ouvrir la fenêtre modale</Button>

   // Composant de fenêtre modale
  <Modal isOpen={isOpen} onClose={onClose}>
   // Code de composant...
  </Modal>
};
```

Vous pouvez également définir l'état initial de la fenêtre modale:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // Composant bouton
  <Button onClick={onOpen}>Ouvrir la fenêtre modale</Button>

   // Composant de fenêtre modale
  <Modal isOpen={isOpen} onClose={onClose}>
   // Code de composant...
  </Modal>
};
```

Cela l'ouvrira par défaut.

Les fonctions suivantes sont disponibles pour travailler avec l'état de la fenêtre modale:

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| isOpen | boolean | Retourne l'état ouvert de la fenêtre modale. |
| onOpen | () => void | Fonction d'ouverture d'une fenêtre modale. |
| onClose | () => void | Fonction pour fermer la fenêtre modale. |
| onToggle | () => void | Bascule l'état de la fenêtre modale vers l'inverse. |
