import React from 'react';
import {MdFastfood, MdOutlineTakeoutDining, MdOutlineDeliveryDining, MdFoodBank} from 'react-icons/md'

export const ServiceData = [
    {
        icon: <MdFastfood/>,
        title: 'dine-in service',
        desc: 'customers sit in the restaurant and order from a menu, to be served food and drinks at their table.',
    },
    {
        icon: <MdOutlineTakeoutDining/>,
        title: 'takeout service',
        desc: 'customers place an order for food to be taken away and consumed elsewhere.',
    },
    {
        icon: <MdOutlineDeliveryDining/>,
        title: 'delivery service',
        desc: 'customers order food to be delivered to their home or office.',
    },
    {
        icon: <MdFoodBank/>,
        title: 'catering service',
        desc: 'restaurant provides food for events, meetings or parties at a different location.',
    }
]