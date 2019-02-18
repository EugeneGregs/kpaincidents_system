var layout = {
	'pages':
	[
		{
			'pageName': "",
			'categories': 
				[
					{
						'categoryBox': true,
						'questions': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
					}
				]
		},
		{
			'pageName': "",
			'categories': 
				[
					{
						'categoryBox': true,
						'questions': [15, 16, 17]
					}
				]
		}
	],
	"validations": {
		0 : 
			{
				'minLength': 2,
				'maxLength': 50
			},
		1: 
			{
				'minLength': 2,
				'maxLength': 150
			},
		5: 
			{
				'minLength': 2,
				'maxLength': 150
			},
		11: 
			{
				'minLength': 2,
				'maxLength': 150
			},
		12: 
			{
				'minLength': 2,
				'maxLength': 150
			}
	},
	'autoPopulate': 
	{
		'15': {
			'type': 'name',
			'editable': false
		},
		'16': {
			'type': 'phone',
			'editable': false
		}
	},
	'optional': [5, 7, 9]
}