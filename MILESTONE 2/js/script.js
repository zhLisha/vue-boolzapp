var app = new Vue(
	{
		el: '#root',
		data: {
			currentContact: 0,

			contacts: [
				{
					name: 'Michele',
					avatar: '_1',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received'
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
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
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
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received'
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
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received'
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
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received'
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
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Tutto bene, tu?',
							status: 'received'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Anche io!!! Che ne dici di uscire sta sera?',
							status: 'sent'
						},
						{
							date: '10/01/2020 17:50:00',
							text: 'Volentieri, ci vediamo sta sera!',
							status: 'received'
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
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Non scordartelo, mi serve per il pranzo di domani',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tranquilla, non ti preoccupare, sono andato a fare la spesa 30 minuti fa',
							status: 'received'
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
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Per cosa?',
							status: 'received'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Me ne vado.',
							status: 'sent'
						}
					],
				}
			]
		},
		methods: {
			selectCurrentContact(index) {
				this.currentContact = index;
			}
		}
	}
)