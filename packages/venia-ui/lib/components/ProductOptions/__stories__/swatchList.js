import React from 'react';

import SwatchList from '../swatchList';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Components/ProductOptions/SwatchList', module);

const SwatchListStory = props => {
    const onClick = () => console.log('Click!');
    return (
        <SwatchList
            items={[
                {
                    label: 'Red',
                    value_index: 0,
                    swatch_data: {
                        value: '#f00505'
                    }
                },
                {
                    label: 'Coquelicot',
                    value_index: 1,
                    swatch_data: {
                        value: '#43f005'
                    }
                },
                {
                    label: 'Blue',
                    value_index: 2,
                    swatch_data: {
                        value: '#0505f0'
                    }
                },
                {
                    label: 'Yellow',
                    value_index: 3,
                    swatch_data: {
                        value: '#FFFF00'
                    }
                }
            ]}
            selectedValue={{
                label: 'Green'
            }}
            onSelectionChange={onClick}
            getItemKey={onClick}
            {...props}
        />
    );
};

stories.add('Base', () => {
    return <SwatchListStory />;
});

stories.add('with text', () => {
    return <SwatchListStory text="Shown in Option" />;
});

stories.add('with Labels', () => {
    return <SwatchListStory hasLabels />;
});

stories.add('with Max', () => {
    const items = [
        {
            label: 'Red',
            value_index: 0,
            swatch_data: {
                value: '#f00505'
            }
        },
        {
            label: 'Green',
            value_index: 1,
            swatch_data: {
                value: '#43f005'
            }
        },
        {
            label: 'Blue',
            value_index: 2,
            swatch_data: {
                value: '#0505f0'
            }
        },
        {
            label: 'More',
            value_index: 3,
            maxInfo: {
                isMax: true,
                swatchesRemain: 7,
                onMaxClick: () => console.log('Max Click!')
            }
        }
    ];
    const selectedValue = { label: 'Green' };
    return <SwatchListStory items={items} selectedValue={selectedValue} />;
});

stories.add('with Max & Labels', () => {
    const items = [
        {
            label: 'Red',
            value_index: 0,
            swatch_data: {
                value: '#f00505'
            }
        },
        {
            label: 'Green',
            value_index: 1,
            swatch_data: {
                value: '#43f005'
            }
        },
        {
            label: 'Blue',
            value_index: 2,
            swatch_data: {
                value: '#0505f0'
            }
        },
        {
            label: 'More',
            value_index: 3,
            maxInfo: {
                isMax: true,
                swatchesRemain: 7,
                onMaxClick: () => console.log('Max Click!')
            }
        }
    ];
    const selectedValue = { label: 'Green' };
    return (
        <SwatchListStory
            items={items}
            hasLabels
            selectedValue={selectedValue}
        />
    );
});

stories.add('with Max, Labels & Text', () => {
    const items = [
        {
            label: 'Red',
            value_index: 0,
            swatch_data: {
                value: '#f00505'
            }
        },
        {
            label: 'Green',
            value_index: 1,
            swatch_data: {
                value: '#43f005'
            }
        },
        {
            label: 'Blue',
            value_index: 2,
            swatch_data: {
                value: '#0505f0'
            }
        },
        {
            label: 'More',
            value_index: 3,
            maxInfo: {
                isMax: true,
                swatchesRemain: 7,
                onMaxClick: () => console.log('Max Click!')
            }
        }
    ];
    const selectedValue = { label: 'Green' };
    return (
        <SwatchListStory
            items={items}
            hasLabels
            selectedValue={selectedValue}
            text="Shown in Option"
        />
    );
});

stories.add('EC: with long Labels', () => {
    const items = [
        {
            label: 'Red',
            value_index: 0,
            swatch_data: {
                value: '#f00505'
            }
        },
        {
            label: 'Kind-of greenish maybe',
            value_index: 1,
            swatch_data: {
                value: '#43f005'
            }
        },
        {
            label: 'Blue',
            value_index: 2,
            swatch_data: {
                value: '#0505f0'
            }
        },
        {
            label: 'Yellow',
            value_index: 3,
            swatch_data: {
                value: '#FFFF00'
            }
        }
    ];
    return <SwatchListStory items={items} hasLabels />;
});
