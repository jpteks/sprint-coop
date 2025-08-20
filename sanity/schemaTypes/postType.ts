import { defineField, defineType } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: "media",
      title: "Media",
      type: "array",
      of: [
        { type: "image" },
        { 
          type: "file",
          title: "Video",
          options: {
            accept: "video/*"
          }
        },
      ],
      validation: (rule) => rule.max(1), // only allow one item
    }),
    
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    // }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
         
          { title: 'Our Work', value: 'our-work' },
          { title: 'Events', value: 'events' },
        ],
        layout: 'radio',
      },
    }),

    // defineField({
    //   name: "youtubeLink",
    //   title: "Video Link",
    //   type: "url",
    //   description: "Optional  video link related to the event",
    //   validation: (rule) =>
    //     rule.uri({
    //       scheme: ["http", "https"],
    //     }),
    // }),
  ],
})
