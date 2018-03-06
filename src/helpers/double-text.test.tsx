import * as React from 'react';
import DoubleTextGenerator from './double-text';

describe('DoubleTextGenerator', () => {
    it('returns correct simple text', () => {
        var text = DoubleTextGenerator.CreateText('Test');
        expect(text).toEqual(<div className="doubleText"><span className="white blackbg"></span><span className="white blackbg"></span></div>);
    });

    it('return correct foreground color', () => {
        var text = DoubleTextGenerator.CreateText('Test', 'red');
        expect(text).toEqual(<div className="doubleText"><span className="red blackbg"></span><span className="red blackbg"></span></div>);
    });

    it('return correct background color', () => {
        var text = DoubleTextGenerator.CreateText('Test', 'red', 'white');
        expect(text).toEqual(<div className="doubleText"><span className="red whitebg"></span><span className="red whitebg"></span></div>);
    });

    it('return correct classes', () => {
        var text = DoubleTextGenerator.CreateText('Test', 'red', 'white', 'testClass');
        expect(text).toEqual(<div className="doubleText testClass"><span className="red whitebg"></span><span className="red whitebg"></span></div>);
    });
});