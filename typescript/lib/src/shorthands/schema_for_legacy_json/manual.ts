import * as p_ from 'pareto-core-shorthands/unconstrained_manual'

import * as x from "../../interface/data/schema_for_legacy_json.js"


export const document = (
    imports: p_.Raw_Dictionary<x.Document.imports.D>,
    definitions: p_.Raw_Dictionary<x.Definitions.D>,
    root: string,
): x.Document => {
    return {
        'imports': p_.dictionary(imports),
        'definitions': p_.dictionary(definitions),
        'root': root,
    }
}

export namespace m {
    export const array_dynamic = (definition: x.Schema): x.Schema.type_constraint.multiple.array => {
        return p_.optional.set({
            'type': ['dynamic', definition]
        })
    }
    export const boolean = (): x.Schema.type_constraint.multiple.boolean_ => {
        return p_.optional.set(null)
    }
    export const null_ = (): x.Schema.type_constraint.multiple.null_ => {
        return p_.optional.set(null)
    }
    export const number = (): x.Schema.type_constraint.multiple.number_ => {
        return p_.optional.set(null)
    }
    export const object_static = (properties: p_.Raw_Dictionary<x.Static_Object.properties.D>): x.Schema.type_constraint.multiple.object_ => {
        return p_.optional.set({
            'type': ['static', {
                'properties': p_.dictionary(properties),
            }]
        })
    }
    export const object_dynamic = (definition: x.Schema): x.Schema.type_constraint.multiple.object_ => {
        return p_.optional.set({
            'type': ['dynamic', definition]
        })
    }
    export const string = (): x.Schema.type_constraint.multiple.string_ => {
        return p_.optional.set(['any', null])
    }
}

export namespace v {
    export const any = (): x.Schema => {
        return ['any', null]
    }
    export const one_of = (
        options: p_.Raw_Dictionary<x.Schema>,
    ): x.Schema => {
        return ['one of', p_.dictionary(options)]
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
            'array': options.array === undefined ? p_.optional.not_set() : options.array,
            'boolean': options.boolean === undefined ? p_.optional.not_set() : options.boolean,
            'null': options.null === undefined ? p_.optional.not_set() : options.null,
            'number': options.number === undefined ? p_.optional.not_set() : options.number,
            'object': options.object === undefined ? p_.optional.not_set() : options.object,
            'string': options.string === undefined ? p_.optional.not_set() : options.string,
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
    //         'steps': steps === undefined ? sh.optional.not_set() : sh.optional.set(steps),
    //     }]
    // }
    export const reference_internal = (definition: string): x.Schema => {
        return ['reference', {
            'document': p_.optional.not_set(),
            'definition': definition,
        }]
    }
    export const enum_ = (items: p_.Raw_Dictionary<null>): x.Schema => {
        return ['type constraint', ['single', ['string', ['enum', p_.dictionary(items)]]]]
    }
    export const object_static = (properties: p_.Raw_Dictionary<x.Static_Object.properties.D>): x.Schema => {
        return ['type constraint', ['single', ['object', {
            'type': ['static', {
                'properties': p_.dictionary(properties),
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