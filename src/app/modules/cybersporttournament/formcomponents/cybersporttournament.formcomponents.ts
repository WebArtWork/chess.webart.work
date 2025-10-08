export const cybersporttournamentFormComponents = {
	formId: 'cybersporttournament',
	title: 'Tournament',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill tournament title...'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill tournament description...'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		}
	]
};
