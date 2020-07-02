export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ]
}