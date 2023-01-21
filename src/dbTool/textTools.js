import { v4 as uuidv4 } from 'uuid';
const textTool = [
  {
    id: uuidv4(),
    image: 'images/card-icon-21.png',
    title: 'Remove Space',
    category: 'Text Tools',
    categorysty: 'dec',
    type: '',
    link: '/RemoveSpaces',
    desc: 'Tool for removing spaces',
  },
  {
    id: uuidv4(),
    image: 'images/card-icon-21.png',
    title: 'Extract Email',
    category: 'Text Tools',
    categorysty: 'dec',
    type: '',
    link: '/extract_email_address',
    desc: 'Tool for removing Extracting Email',
  },
  {
    id: uuidv4(),
    image: 'images/card-icon-21.png',
    title: 'Extract Link',
    category: 'Text Tools',
    categorysty: 'dec',
    type: '',
    link: '/extract_links',
    desc: 'Tool for Extracting Link',
  },
];

export default textTool;
