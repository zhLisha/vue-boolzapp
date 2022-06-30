var app = new Vue(
	{
		el: '#root',
		data: {
			// Elemento corrente
			currentContact: 0,
			// Input nuovo messaggio utente
			userNewMessage:'',

			contacts: [
				{
					name: 'Michele',
					avatar: '_1',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received',
							active: true
						}
					],
				},
				{
					name: 'Fabio',
					avatar: '_2',
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							text: 'Ciao come stai?',
							status: 'sent',
							active: true
						},
						{
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received',
							active: true
						},
						{
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent',
							active: true
						}
					],
				},
				{
					name: 'Samuele',
					avatar: '_3',
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							text: 'La Marianna va in campagna',
							status: 'received',
							active: true
						},
						{
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent',
							active: true
						},
						{
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received',
							active: true
						}
					],
				},
				{
					name: 'Massimo',
					avatar: '_4',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received',
							active: true
						}
					],
				},
				{
					name: 'Luigi',
					avatar: '_5',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received',
							active: true
						}
					],
				},
				{
					name: 'Serena',
					avatar: '_6',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Ciao Serena, come stai?',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Tutto bene, tu?',
							status: 'received',
							active: true
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Anche io!!! Che ne dici di uscire sta sera?',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 17:50:00',
							text: 'Volentieri, ci vediamo sta sera!',
							status: 'received',
							active: true
						}
					],
				},
				{
					name: 'Edoardo',
					avatar: '_7',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai preso il pane?',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Non scordartelo, mi serve per il pranzo di domani',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tranquilla, non ti preoccupare, sono andato a fare la spesa 30 minuti fa',
							status: 'received',
							active: true
						}
					],
				},
				{
					name: 'Mario',
					avatar: '_8',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Ho fatto le valigie',
							status: 'sent',
							active: true
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Per cosa?',
							status: 'received',
							active: true
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Me ne vado.',
							status: 'sent',
							active: true
						}
					],
				}
			]
		},
		methods: {
			// Trasformazione di currentContact nell'elemento corrente selezionato
			selectCurrentContact(index) {
				this.currentContact = index;
			},

			// Invio di un nuovo messaggio da parte dell'utente a cui dopo 1sec. si attivera' la risposta automatica 'OK'
			sendNewMessage() {
				// Evito che il messaggio venga inviato con inutili spazi vuoti ai lati
				const trimmedUserMessage = this.userNewMessage.trim();

				// L'invio avviene solo se il contenuto del messaggio e' maggiore alla lunghezza di trimmedUserMessage
				if(trimmedUserMessage.length > 0) {
					// Creo un nuovo oggetto da aggiungere all'array di oggetti come nuovo input dell'utente
					const newMessage = {
						date: '',
						text: trimmedUserMessage,
						status: 'sent',
						active: true
					};

					this.contacts[this.currentContact].messages.push(newMessage);
				}
				// Svuoto l'input dell'utente
				this.userNewMessage = '';

				// Setto il timer per la risposta automatica a 1sec. dall'invio del messaggio dell'utente
				setTimeout(() => {
					const automaticMessage = {
						date: '',
						text: 'Ok',
						status: 'received',
						active: true
					};

					this.contacts[this.currentContact].messages.push(automaticMessage);

				}, 1000);
			}
		}
	}
)