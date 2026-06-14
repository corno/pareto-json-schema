import * as pt from 'pareto-core/dist/assign'

import * as x from "../interface/generated/liana/schemas/schema_for_legacy_json/data"

import * as sh from 'pareto-core-shorthands/dist/unconstrained'

export const document = (
    imports: sh.Raw_Or_Normal_Dictionary<x.Document.imports.D>,
    definitions: sh.Raw_Or_Normal_Dictionary<x.Definitions.D>,
    root: string,
): x.Document => {
    return {
        'imports': sh.dictionary.literal(imports),
        'definitions': sh.dictionary.literal(definitions),
        'root': root,
    }
}

export namespace m {
    export const array_dynamic = (definition: x.Schema): x.Schema.type_constraint.multiple.array => {
        return pt.optional.literal.set({
            'type': ['dynamic', definition]
        })
    }
    export const boolean = (): x.Schema.type_constraint.multiple.boolean_ => {
        return pt.optional.literal.set(null)
    }
    export const null_ = (): x.Schema.type_constraint.multiple.null_ => {
        return pt.optional.literal.set(null)
    }
    export const number = (): x.Schema.type_constraint.multiple.number_ => {
        return pt.optional.literal.set(null)
    }
    export const object_static = (properties: sh.Raw_Or_Normal_Dictionary<x.Static_Object.properties.D>): x.Schema.type_constraint.multiple.object_ => {
        return pt.optional.literal.set({
            'type': ['static', {
                'properties': sh.dictionary.literal(properties),
            }]
        })
    }
    export const object_dynamic = (definition: x.Schema): x.Schema.type_constraint.multiple.object_ => {
        return pt.optional.literal.set({
            'type': ['dynamic', definition]
        })
    }
    export const string = (): x.Schema.type_constraint.multiple.string_ => {
        return pt.optional.literal.set(['any', null])
    }
}

export namespace v {
    export const any = (): x.Schema => {
        return ['any', null]
    }
    export const one_of = (
        options: sh.Raw_Or_Normal_Dictionary<x.Schema>,
    ): x.Schema => {
        return ['one of', sh.dictionary.literal(options)]
    }
    export const multiple_types = (
        options: {
            'object'?: x.Schema.type_constraint.multiple.object_
            'array'?: x.Schema.type_constraint.multiple.array,
            'boolean'?: x.Schema.type_constraint.multiple.boolean_,
            'null'?: x.Schema.type_constraint.multiple.null_,
            'number'?: x.Schema.type_constraint.multiple.number_,
            'string'?: x.Schema.type_constraint.multiple.string_,
        },
    ): x.Schema => {
        return ['type constraint', ['multiple', {
            'array': options.array === undefined ? pt.optional.literal.not_set() : options.array,
            'boolean': options.boolean === undefined ? pt.optional.literal.not_set() : options.boolean,
            'null': options.null === undefined ? pt.optional.literal.not_set() : options.null,
            'number': options.number === undefined ? pt.optional.literal.not_set() : options.number,
            'object': options.object === undefined ? pt.optional.literal.not_set() : options.object,
            'string': options.string === undefined ? pt.optional.literal.not_set() : options.string,
        }]]
    }
    export const array_dynamic = (definition: x.Schema): x.Schema => {
        return ['type constraint', ['single', ['array', {
            'type': ['dynamic', definition]
        }]]]
    }
    export const boolean = (): x.Schema => {
        return ['type constraint', ['single', ['boolean', null]]]
    }
    // export const reference_external = (name: string, steps?: string[]): x.Schema => {
    //     return ['reference', {
    //         'document': name,
    //         'steps': steps === undefined ? pt.optional.literal.not_set() : pt.optional.literal.set(steps),
    //     }]
    // }
    export const reference_internal = (definition: string): x.Schema => {
        return ['reference', {
            'document': pt.optional.literal.not_set(),
            'definition': definition,
        }]
    }
    export const enum_ = (items: sh.Raw_Or_Normal_Dictionary<null>): x.Schema => {
        return ['type constraint', ['single', ['string', ['enum', sh.dictionary.literal(items)]]]]
    }
    export const object_static = (properties: sh.Raw_Or_Normal_Dictionary<x.Static_Object.properties.D>): x.Schema => {
        return ['type constraint', ['single', ['object', {
            'type': ['static', {
                'properties': sh.dictionary.literal(properties),
            }]
        }]]]
    }
    export const object_dynamic = (definition: x.Schema): x.Schema => {
        return ['type constraint', ['single', ['object', {
            'type': ['dynamic', definition]
        }]]]
    }
    export const null_ = (): x.Schema => {
        return ['type constraint', ['single', ['null', null]]]
    }
    export const number = (): x.Schema => {
        return ['type constraint', ['single', ['number', null]]]
    }
    export const string = (): x.Schema => {
        return ['type constraint', ['single', ['string', ['any', null]]]]
    }
}

export const property = (
    definition: x.Schema,
    optional?: 'optional',
): x.Static_Object.properties.D => {
    return {
        'schema': definition,
        'optional': optional === 'optional',    
    }
}