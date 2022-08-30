const contacts = [
    {
        name: 'Michele',
        avatar: './assets/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                delete: false
            }
        ]
    },
    {
        name: 'Fabio',
        avatar: './assets/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                delete: false
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                delete: false
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                delete: false
            }
        ]
    },
    {
        name: 'Samuele',
        avatar: './assets/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                delete: false
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                delete: false
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                delete: false
            }
        ]
    },
    {
        name: 'Alessandro B.',
        avatar: './assets/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                delete: false
            }
        ]
    },
    {
        name: 'Alessandro L.',
        avatar: './assets/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                delete: false
            }
        ]
    },
    {
        name: 'Claudia',
        avatar: './assets/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                delete: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                delete: false
            }
        ]
    },
    {
        name: 'Federico',
        avatar: './assets/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                delete: false
            }
        ]
    },
    {
        name: 'Davide',
        avatar: './assets/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                delete: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                delete: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                delete: false
            }
        ]
    }
];

const app = new Vue({
    el: '#app',
    data: {
        contacts: contacts,
        activeIndex: 0,
        newMessage: '',
        search: '',
        showPopup: false
    },
    computed: {
        activeContact: function() {
            return this.searchedContacts[this.activeIndex];
        },
        activeMessages: function() {
            return this.activeContact.messages;
        },
        searchedContacts: function() {
            this.search = this.search.toLowerCase();

            return this.contacts.filter((contact) => {
                const name = contact.name.toLowerCase();
                return name.includes(this.search);
            });
        }
    },
    methods: {
        setActiveContact: function(index) {
            this.activeIndex = index;

            console.log(this.activeContact);
            console.log(this.activeIndex);
        },
        sendMessage: function() {
            const text = this.newMessage.trim();
            const activeMessages = this.activeMessages;

            if (!text) return;

            activeMessages.push(this.createMessage(text, 'sent'));
            this.newMessage = '';

            setTimeout(() => {
                activeMessages.push(this.createMessage('ok', 'received'));
            }, 1000);            
        },
        createMessage: function(message, status) {
            return {
                date: '10/01/2020 15:51:00',
                message: message,
                status: status,
                delete: false
            }
        },
        print: function() {
            console.log(this.searchedContacts);
            this.activeIndex = 0;
        
            console.log(this.activeContact);
            console.log(this.activeIndex);

        },
        togglePopoup: function(message) {
            message.delete = !message.delete;
        },
        deleteMessage: function(index) {
            this.activeMessages.splice(index, 1);
        },
        getTime: function(date) {
            const [day, time] = date.split(' ');
            const [hh, mm, ss] = time.split(':');
            return `${hh}:${mm}`;
        },
        getDate: function(date) {
            const [day, time] = date.split(' ');
            const [dd, mm, yy] = day.split('/');
            return `${dd}/${mm}/${yy}`;
        }
    },
    mounted() {
        console.log(this.searchedContacts)

        console.log(this.activeContact);
        console.log(this.activeIndex);
    }
});

console.log(app);