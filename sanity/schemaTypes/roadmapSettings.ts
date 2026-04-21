import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'roadmapSettings',
  title: 'Roadmap settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phases',
      title: 'Phases',
      type: 'array',
      of: [
        defineField({
          name: 'phase',
          title: 'Phase',
          type: 'object',
          fields: [
            defineField({
              name: 'num',
              title: 'Phase number',
              type: 'number',
              validation: (Rule) => Rule.required().integer().min(1),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              num: 'num',
              title: 'title',
            },
            prepare({num, title}) {
              return {
                title: `Phase ${num ?? '-'}`,
                subtitle: title || 'Untitled',
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Roadmap settings',
      }
    },
  },
})
