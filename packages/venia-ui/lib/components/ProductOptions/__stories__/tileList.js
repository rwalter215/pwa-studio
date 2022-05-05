import React from 'react';

import TileList from '../tileList';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Components/ProductOptions/TileList', module);

const TileListStory = props => {
    const onClick = () => console.log("Click!");
    return <TileList
        items={[{
            label: "S",
            value_index: 0,
        },
        {
            label: "M",
            value_index: 1,
        },
        {
            label: "L",
            value_index: 2,
        }]}
        selectedValue={{
            label: 'S'
        }}
        onSelectionChange={onClick}
        getItemKey={onClick}
        {...props}
    />
}

stories.add('Base', () => {
    return <TileListStory />
})

stories.add('Compressed', () => {
    return <TileListStory isCompressed />
})

stories.add('Compressed with selection', () => {
    const selectedValue = {
        label: 'S'
    }
    return <TileListStory isCompressed />
})
