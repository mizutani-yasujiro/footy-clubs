import moment from 'moment';
import engFlag from '../assets/icons/england.svg';
import clubOne from '../assets/team-logo/championship/athletic-charlton-icon.png';
import clubTwo from '../assets/team-logo/championship/blackburn-rovers-icon.png';
import clubThree from '../assets/team-logo/eredivisie/ADO-Den-Haag.png';
import clubFour from '../assets/team-logo/eredivisie/Ajax.png';
import clubFive from '../assets/team-logo/eredivisie/FC-Utrecht.png';
import clubSix from '../assets/team-logo/eredivisie/Vitesse-Arnhem.png';

const chatUserMock = [
  {
    id: 1,
    name: 'Mark J Whittaker',
    img:
      'https://images.unsplash.com/photo-1523913507744-1970fd11e9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    position: 'Defender',
    natFlag: engFlag,
    number: '3',
    lastMessage: 'How are you?',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
    clubImg: clubOne,
  },
  {
    isClub: true,
    id: 23,
    name: 'Tuesday Night FC',
    details: {
      clubOwner: 'Mark J Whittaker',
      clubLocation:
        'Millwall Community Trust Lewisham Lions Centre, Bolina Rd, Sermondsey, London SE16 3Ld',
      clubMembers: '20',
      gameSize: '7 aside',
      gameDay: 'Tuesday',
      nextGameIn: '30 days',
    },
    img:
      'https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80',
    natFlag: engFlag,
    number: '18',
    lastMessage: 'How may I help you?',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
  },
  {
    id: 2,
    name: 'Peter Jones',
    img:
      'https://images.unsplash.com/photo-1579983926774-399a9cb765c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '18',
    lastMessage: 'I work in an office',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
    clubImg: clubThree,
  },
  {
    id: 3,
    name: 'David Guy',
    img:
      'https://images.unsplash.com/photo-1535467221272-12fb327de525?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '12',
    lastMessage: 'Paid hill fine ten now love even leaf.',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
    clubImg: clubFour,
  },
  {
    id: 4,
    name: 'Paul Williams',
    img:
      'https://images.unsplash.com/photo-1529112403919-76c387f7ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '9',
    lastMessage: 'View fine me gone this name an rank.',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
    clubImg: clubFive,
  },
  {
    id: 5,
    name: 'Curtis Smith',
    img:
      'https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '5',
    lastMessage: 'Esteem garden men yet shy course.',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
    clubImg: clubSix,
  },
  {
    id: 6,
    name: 'Paul Dily',
    img:
      'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    natFlag: engFlag,
    number: '25',
    lastMessage: 'Hello there.',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
  },
  {
    id: 7,
    name: 'Chris Motion',
    img:
      'https://images.unsplash.com/photo-1591632444638-d73b7678b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    natFlag: engFlag,
    number: '5',
    lastMessage: 'What are you doing!?',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
  },
  {
    id: 8,
    name: 'Luly Bay',
    img:
      'https://images.unsplash.com/photo-1560002161-173a95036dfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    natFlag: engFlag,
    number: '5',
    lastMessage: 'Cool',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
    clubImg: clubTwo,
  },
  {
    id: 9,
    name: 'Jack Roe',
    img:
      'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    natFlag: engFlag,
    number: '5',
    lastMessage: "I don't know what to say",
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
  },
  {
    id: 10,
    name: 'Tom Letencki',
    img:
      'https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    natFlag: engFlag,
    number: '5',
    lastMessage: 'Are you ok?',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
  },
  {
    id: 11,
    name: 'Oz Madey',
    img:
      'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
    natFlag: engFlag,
    number: '5',
    lastMessage: 'I have a bad feelings about this.',
    lastMessageDate: moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format(
      'DD/MM HH:SS',
    ),
  },
];

export default chatUserMock;
