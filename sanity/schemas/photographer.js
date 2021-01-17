import { FaCameraRetro as icon } from 'react-icons/fa';
import { FaUserSlash as notActive } from 'react-icons/fa';

export default {
  title: 'Photographer',
  name: 'photographer',
  type: 'document',
  icon,
  fields: [
      {
        title: 'Photographer Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Headshot',
        name: 'headshot',
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
        title: 'Photographer Bio',
        name: 'photograher_bio',
        type: 'text'
      },
      {
        title: 'No longer with us?',
        name: 'not_active',
        type: 'boolean'
      },
      
    ],
    preview: {
      select: {
        name: 'name',
        not_active: 'not_active',
      },
      prepare: ({ name, not_active }) => ({
        title: `${name} ${not_active ? '🌱' : ''}`,
      }),
    },
}