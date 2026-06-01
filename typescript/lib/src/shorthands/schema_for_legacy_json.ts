import * as _p from 'pareto-core/dist/assign'

import * as x from "../interface/generated/liana/schemas/schema_for_legacy_json/data"

import * as sh from 'pareto-core-shorthands/dist/unconstrained'

export const schema = (
    definitions: sh.Raw_Or_Normal_Dictionary<x.Value>,
    root: string,
): x.Schema => {
    return {
        "definitions": sh.dictionary.literal(definitions),
        "root": root,
    }
}

export namespace ao {
    export const array_dynamic = (definition: x.Value): x.Value.any_of.array => {
        return _p.optional.literal.set({
            'type': ['dynamic', definition]
        })
    }
    export const boolean = (): x.Value.any_of.boolean_ => {
        return _p.optional.literal.set(null)
    }
    export const null_ = (): x.Value.any_of.null_ => {
        return _p.optional.literal.set(null)
    }
    export const number = (): x.Value.any_of.number_ => {
        return _p.optional.literal.set(null)
    }
    export const object_static = (properties: sh.Raw_Or_Normal_Dictionary<x.Static_Object.properties.D>): x.Value.any_of.object_ => {
        return _p.optional.literal.set({
            'type': ['static', {
                'properties': sh.dictionary.literal(properties),
            }]
        })
    }
    export const object_dynamic = (definition: x.Value): x.Value.any_of.object_ => {
        return _p.optional.literal.set({
            'type': ['dynamic', definition]
        })
    }
    export const string = (): x.Value.any_of.string_ => {
        return _p.optional.literal.set(['any', null])
    }
}

export namespace v {
    export const any = (): x.Value => {
        return ['any', null]
    }
    export const any_of = (
        options: {
            'object'?: x.Value.any_of.object_
            'array'?: x.Value.any_of.array,
            'boolean'?: x.Value.any_of.boolean_,
            'null'?: x.Value.any_of.null_,
            'number'?: x.Value.any_of.number_,
            'string'?: x.Value.any_of.string_,
        },
        else_?: string
    ): x.Value => {
        return ['any of', {
            'array': options.array === undefined ? _p.optional.literal.not_set() : options.array,
            'boolean': options.boolean === undefined ? _p.optional.literal.not_set() : options.boolean,
            'null': options.null === undefined ? _p.optional.literal.not_set() : options.null,
            'number': options.number === undefined ? _p.optional.literal.not_set() : options.number,
            'object': options.object === undefined ? _p.optional.literal.not_set() : options.object,
            'string': options.string === undefined ? _p.optional.literal.not_set() : options.string,
            'else': else_ === undefined ? _p.optional.literal.not_set() : _p.optional.literal.set(else_),
        }]
    }
    export const array_dynamic = (definition: x.Value): x.Value => {
        return ['primitive', ['array', {
            'type': ['dynamic', definition]
        }]]
    }
    export const boolean = (): x.Value => {
        return ['primitive', ['boolean', null]]
    }
    export const definition_reference = (name: string): x.Value => {
        return ['definition reference', name]
    }
    export const enum_ = (items: sh.Raw_Or_Normal_Dictionary<null>): x.Value => {
        return ['primitive', ['string', ['enum', sh.dictionary.literal(items)]]]
    }
    export const object_static = (properties: sh.Raw_Or_Normal_Dictionary<x.Static_Object.properties.D>): x.Value => {
        return ['primitive', ['object', {
            'type': ['static', {
                'properties': sh.dictionary.literal(properties),
            }]
        }]]
    }
    export const object_dynamic = (definition: x.Value): x.Value => {
        return ['primitive', ['object', {
            'type': ['dynamic', definition]
        }]]
    }
    export const null_ = (): x.Value => {
        return ['primitive', ['null', null]]
    }
    export const number = (): x.Value => {
        return ['primitive', ['number', null]]
    }
    export const string = (): x.Value => {
        return ['primitive', ['string', ['any', null]]]
    }
    export const nullable = (
        value: x.Value
    ): x.Value => {
        return ['nullable', value]
    }
}

export const property = (
    definition: x.Value,
    presence?: 'optional, not nullable' | 'optional and nullable',
): x.Static_Object.properties.D => {
    return {
        'definition': definition,
        'presence': presence === 'optional, not nullable'
            ? ['optional', { 'nullable': false}]
            : presence === 'optional and nullable'
                ? ['optional', { 'nullable': true }]
                : ['required', null],
    }
}