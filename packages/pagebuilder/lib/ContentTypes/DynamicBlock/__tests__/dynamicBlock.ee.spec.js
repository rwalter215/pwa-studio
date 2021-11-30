import React from 'react';

import { createTestInstance } from '@magento/peregrine';

import DynamicBlock from '../dynamicBlock.ee';

jest.mock(
    '@magento/venia-ui/lib/components/CmsDynamicBlock/cmsDynamicBlock',
    () => props => <mock-CmsDynamicBlockGroup {...props} />
);

const defaultProps = {
    displayInline: false,
    displayMode: 'fixed',
    uids: 'uids',
    textAlign: 'right',
    border: 'solid',
    borderColor: 'red',
    borderWidth: '10px',
    borderRadius: '15px',
    marginTop: '10px',
    marginRight: '10px',
    marginBottom: '10px',
    marginLeft: '10px',
    paddingTop: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px'
};

describe('#PageBuilder DynamicBlock EE', () => {
    it('renders a Dynamic Block component without custom classes', () => {
        const component = createTestInstance(
            <DynamicBlock {...defaultProps} />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a Dynamic Block component with custom classes', () => {
        const blockProps = {
            ...defaultProps,
            cssClasses: ['test-class']
        };
        const component = createTestInstance(<DynamicBlock {...blockProps} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a Dynamic Block component inlined', () => {
        const blockProps = {
            ...defaultProps,
            displayInline: true
        };
        const component = createTestInstance(<DynamicBlock {...blockProps} />);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
