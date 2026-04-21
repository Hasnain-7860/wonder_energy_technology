import {defineField, defineType} from 'sanity'

const PLATFORM_LIST = [
  {title: 'TikTok', value: 'tiktok'},
  {title: 'Snapchat', value: 'snapchat'},
  {title: 'Reddit', value: 'reddit'},
  {title: 'Facebook', value: 'facebook'},
  {title: 'X', value: 'x'},
  {title: 'Instagram', value: 'instagram'},
  {title: 'GitHub', value: 'github'},
  {title: 'YouTube', value: 'youtube'},
] as const

export default defineType({
  name: 'footerSettings',
  title: 'Footer social links',
  type: 'document',
  fields: [
    defineField({
      name: 'socialLinks',
      title: 'Social icon links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [...PLATFORM_LIST],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) =>
                Rule.required().uri({
                  allowRelative: false,
                  scheme: ['http', 'https'],
                }),
            }),
          ],
          preview: {
            select: {
              platform: 'platform',
              url: 'url',
            },
            prepare({platform, url}) {
              const label =
                PLATFORM_LIST.find((p) => p.value === platform)?.title ?? platform
              return {
                title: label,
                subtitle: url,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer social links',
      }
    },
  },
})
