import React, { useMemo } from 'react';
import { generateUrl } from '@magento/peregrine/lib/util/imageUtils';
import {
    bool,
    func,
    number,
    object,
    oneOfType,
    shape,
    string
} from 'prop-types';

import { useStyle } from '../../classify';

import defaultClasses from './swatch.module.css';

import { useSwatch } from '@magento/peregrine/lib/talons/ProductOptions/useSwatch';

const getClassName = (name, isSelected) =>
    `${name}${isSelected ? '_selected' : ''}`;

// Swatches _must_ have a 1x1 aspect ratio to match the UI.
const SWATCH_WIDTH = 40;

const Swatch = props => {
    const {
        isSelected,
        item: { label, value_index, swatch_data, maxInfo = { isMax: false, swatchesRemain: 0 } },
        onClick,
        style,
    } = props;

    const talonProps = useSwatch({
        onClick,
        value_index
    });

    const { handleClick } = talonProps;
    const { isMax, swatchesRemain, onMaxClick } = maxInfo;

    const classes = useStyle(defaultClasses, props.classes);

    let finalStyle = style;

    if (swatch_data) {
        const { thumbnail, value } = swatch_data;

        let swatchValue = '';

        if (thumbnail) {
            const imagePath = generateUrl(thumbnail, 'image-swatch')(
                SWATCH_WIDTH
            );

            swatchValue = `url("${imagePath}")`;
        } else {
            swatchValue = value;
        }

        // We really want to avoid specifying presentation within JS.
        // Swatches are unusual in that their color is data, not presentation,
        // but applying color *is* presentational.
        // So we merely provide the color data here, and let the CSS decide
        // how to use that color (e.g., background, border).
        finalStyle = Object.assign({}, style, {
            '--venia-swatch-bg': swatchValue
        });
    }

    const className = classes[getClassName('root', isSelected)];

    return (
        <button
            className={className}
            onClick={onMaxClick || handleClick}
            style={finalStyle}
            title={label}
            type="button"
            data-cy="Swatch-root"
        >
            {isMax && `+${swatchesRemain}`}
        </button>
    );
};

Swatch.propTypes = {
    isSelected: bool,
    item: shape({
        label: string.isRequired,
        value_index: oneOfType([number, string]).isRequired
    }).isRequired,
    onClick: func.isRequired,
    style: object
};

Swatch.defaultProps = {
    isSelected: false,
};

export default Swatch;
