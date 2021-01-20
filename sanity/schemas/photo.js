
import PriceInput from '../components/PriceInput';
import ItemPrice from '../components/PriceInput';



export default {
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
        {
          title: 'Photo Name',
          name: 'name',
          type: 'string',
          },
        {
          title: 'Photograph',
          name: 'photograph',
          type: 'image',
          options: {
              hotspot: true,
          },
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 100,
          },
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
          description: 'Price in USD',
          validation: (Rule) => Rule.min(1000).max(50000),
          inputComponent: ItemPrice,
        },
        {
          title: 'Photographer',
          name: 'photographer',
          type: 'reference',
          to: [{type: 'photographer'}]
        },
        {
          title: 'Artist',
          name: 'artist',
          type: 'array',
          of: [{type: 'reference', to:[{type: 'artist'}]}]
        },
        {
          title: 'Photo Option',
          name: 'photoOption',
          type: 'array',
          of: [{type: 'photoOption'}]
        },

        
    ],
    preview: {
      select: {
        title: 'name',
        media: 'photograph',
        artist0: 'artist.0.name',
        artist1: 'artist.1.name',
        artist2: 'artist.2.name',
        artist3: 'artist.3.name',
      },
      prepare: ({ title, media, ...toppings }) => {
        const featuring = Object.values(toppings).filter(Boolean);
        return {
          title,
          media,
          subtitle: featuring.join(', '),
        };
      },
    },
}