import * as p_ from 'pareto-core/implementation/refiner'
import type * as p_i from 'pareto-core/interface/refiner'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import type * as s_in from "../../../interface/schemas/json_with_parse_info.js"
import type * as s_out from "../../../interface/schemas/json_schema.js"
import type * as s_error from "../../../interface/schemas/json_value_unmarshalling.js"

//dependencies
import * as r_unmarshall from "pareto-json/modules/unmarshalling/implemenation/refiners/unmarshalled_json_value/json_with_parse_info"


export const Schema: p_i.Refiner<
    s_out.Schema,
    s_error.Error,
    s_in.Value
> = ($, abort) => {
    const range = $.range
    return p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'boolean': return p_.option($, ($) => ['boolean', $.value])
                case 'object': return p_.option($, ($): s_out.Schema => ['object', p_change_context(
                    r_unmarshall.Object_No_Unexpected_Properties_From_Object( //okay for now, but the JSON schema spec allows additional properties
                        $,
                        abort,
                        {
                            'expected properties': p_.literal.dictionary({

                                //core
                                "$id": null,
                                "$schema": null,
                                "$ref": null,
                                "$anchor": null,
                                "$dynamicRef": null,
                                "$dynamicAnchor": null,
                                "$vocabulary": null,
                                "$comment": null,
                                "$defs": null,
                                //applicator
                                "prefixItems": null,
                                "items": null,
                                "contains": null,
                                "additionalProperties": null,
                                "properties": null,
                                "patternProperties": null,
                                "dependentSchemas": null,
                                "propertyNames": null,
                                "if": null,
                                "then": null,
                                "else": null,
                                "oneOf": null,
                                "allOf": null,
                                "anyOf": null,
                                "not": null,
                                //unevaluated
                                "unevaluatedItems": null,
                                "unevaluatedProperties": null,
                                //validation
                                "type": null,
                                "const": null,
                                "enum": null,
                                "multipleOf": null,
                                "maximum": null,
                                "exclusiveMaximum": null,
                                "minimum": null,
                                "exclusiveMinimum": null,
                                "maxLength": null,
                                "minLength": null,
                                "pattern": null,
                                "maxItems": null,
                                "minItems": null,
                                "uniqueItems": null,
                                "maxContains": null,
                                "minContains": null,
                                "maxProperties": null,
                                "minProperties": null,
                                "required": null,
                                "dependentRequired": null,
                                //meta-data
                                "title": null,
                                "description": null,
                                "default": null,
                                "deprecated": null,
                                "readOnly": null,
                                "writeOnly": null,
                                "examples": null,
                                //format-annotation
                                "format": null,
                                //content
                                "contentEncoding": null,
                                "contentMediaType": null,
                                "contentSchema": null,
                                //deprecated
                                "definitions": null,
                                "dependencies": null,
                                "$recursiveAnchor": null,
                                "$recursiveRef": null,


                            })
                        }
                    ),
                    ($): s_out.Schema_Object => ({

                        /******** core ********/

                        '$id': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$id"
                            )).map(
                                ($) => r_unmarshall.String($.value, abort).token.value),

                        '$schema': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$schema"
                            )).map(
                                ($) => r_unmarshall.String($.value, abort).token.value),

                        '$ref': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$ref"
                            )).map(
                                ($) => r_unmarshall.String($.value, abort).token.value),

                        '$anchor': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$anchor"
                            )).map(
                                ($) => r_unmarshall.String($.value, abort).token.value),

                        '$dynamicRef': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$dynamicRef"
                            )).map(
                                ($) => r_unmarshall.String($.value, abort).token.value),

                        '$dynamicAnchor': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$dynamicAnchor"
                            )).map(
                                ($) => r_unmarshall.String($.value, abort).token.value),

                        '$vocabulary': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$vocabulary"
                            )).map(
                                ($) => p_change_context(
                                    r_unmarshall.Object_With_Unique_Keys_From_Object(
                                        r_unmarshall.Object($.value, abort),
                                        abort
                                    ),
                                    ($) => p_.from.dictionary($.properties).map(
                                        ($) => r_unmarshall.Boolean($.value, abort).value)
                                )),

                        '$comment': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$comment"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                        '$defs': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$defs"
                            )
                        ).map(
                            ($) => p_change_context(
                                r_unmarshall.Object_With_Unique_Keys_From_Object(
                                    r_unmarshall.Object($.value, abort),
                                    abort
                                ),
                                ($) => p_.from.dictionary($.properties).map(
                                    ($) => Schema($.value, abort))
                            )),

                        /******** applicator ********/

                        'prefixItems': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "prefixItems"
                            )
                        ).map(
                            ($) => Schema_Array(r_unmarshall.Array($.value, abort), abort)),

                        'items': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "items"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'contains': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "contains"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'additionalProperties': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "additionalProperties"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'properties': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "properties"
                            )
                        ).map(
                            ($) => p_change_context(
                                r_unmarshall.Object_With_Unique_Keys_From_Object(
                                    r_unmarshall.Object($.value, abort),
                                    abort
                                ),
                                ($) => p_.from.dictionary($.properties).map(
                                    ($) => Schema($.value, abort))
                            )),

                        'patternProperties': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "patternProperties"
                            )
                        ).map(
                            ($) => p_change_context(
                                r_unmarshall.Object_With_Unique_Keys_From_Object(
                                    r_unmarshall.Object($.value, abort),
                                    abort
                                ),
                                ($) => p_.from.dictionary($.properties).map(
                                    ($) => Schema($.value, abort))
                            )),

                        'dependentSchemas': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "dependentSchemas"
                            )
                        ).map(
                            ($) => p_change_context(
                                r_unmarshall.Object_With_Unique_Keys_From_Object(
                                    r_unmarshall.Object($.value, abort),
                                    abort
                                ),
                                ($) => p_.from.dictionary($.properties).map(
                                    ($) => Schema($.value, abort))
                            )),

                        'propertyNames': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "propertyNames"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'if': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "if"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'then': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "then"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'else': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "else"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'oneOf': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "oneOf"
                            )
                        ).map(
                            ($) => Schema_Array(r_unmarshall.Array($.value, abort), abort)),

                        'anyOf': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "anyOf"
                            )
                        ).map(
                            ($) => Schema_Array(r_unmarshall.Array($.value, abort), abort)),

                        'allOf': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "allOf"
                            )
                        ).map(
                            ($) => Schema_Array(r_unmarshall.Array($.value, abort), abort)),

                        'not': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "not"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        /******** unevaluated ********/

                        'unevaluatedItems': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "unevaluatedItems"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        'unevaluatedProperties': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "unevaluatedProperties"
                            )
                        ).map(
                            ($) => Schema($.value, abort)),

                        /******** validation ********/

                        'type': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "type"
                            )
                        ).map(
                            ($): s_out.Type => p_.from.state($.value.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'string': return p_.option($, ($) => ['single', Simple_Types($, abort)])
                                        case 'array': return p_.option($, ($) => ['array', p_.from.list($.items).map(
                                            ($) => Simple_Types(
                                                r_unmarshall.String($, abort),
                                                abort
                                            ))
                                        ])
                                        default: return abort({
                                            'type': ['unexpected type', {
                                                'expected': p_.literal.list(['string', 'array'])
                                            }],
                                            'range': range,
                                        })
                                    }
                                })),

                        'const': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "const"
                            )
                        ).map(
                            ($) => $.value),

                        'enum': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "enum"
                            )
                        ).map(
                            ($) => r_unmarshall.Array($.value, abort).items),

                        'multipleOf': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "multipleOf"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'maximum': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "maximum"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'exclusiveMaximum': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "exclusiveMaximum"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'minimum': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "minimum"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'exclusiveMinimum': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "exclusiveMinimum"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'maxLength': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "maxLength"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'minLength': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "minLength"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'pattern': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "pattern"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                        'maxItems': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "maxItems"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'minItems': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "minItems"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'uniqueItems': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "uniqueItems"
                            )
                        ).map(
                            ($) => r_unmarshall.Boolean($.value, abort).value),

                        'maxContains': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "maxContains"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'minContains': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "minContains"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'maxProperties': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "maxProperties"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'minProperties': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "minProperties"
                            )
                        ).map(
                            ($) => r_unmarshall.Number($.value, abort).value),

                        'required': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "required"
                            )
                        ).map(
                            ($) => String_Array(r_unmarshall.Array($.value, abort), abort)),

                        'dependentRequired': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "dependentRequired"
                            )
                        ).map(
                            ($) => p_change_context(
                                r_unmarshall.Object_With_Unique_Keys_From_Object(
                                    r_unmarshall.Object($.value, abort),
                                    abort
                                ),
                                ($) => p_.from.dictionary($.properties).map(
                                    ($) => String_Array(r_unmarshall.Array($.value, abort), abort))
                            )),

                        /******** meta-data ********/

                        'title': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "title"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                        'description': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "description"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                        'default': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "default"
                            )
                        ).map(
                            ($) => $.value),

                        'deprecated': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "deprecated"
                            )
                        ).map(
                            ($) => r_unmarshall.Boolean($.value, abort).value),

                        'readOnly': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "readOnly"
                            )
                        ).map(
                            ($) => r_unmarshall.Boolean($.value, abort).value),

                        'writeOnly': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "writeOnly"
                            )
                        ).map(
                            ($) => r_unmarshall.Boolean($.value, abort).value),

                        'examples': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "examples"
                            )
                        ).map(
                            ($) => r_unmarshall.Array($.value, abort).items),

                        /******** format-annotation ********/

                        'format': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "format"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                        /******** content ********/

                        'contentEncoding': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "contentEncoding"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                        'contentMediaType': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "contentMediaType"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value
                        ),

                        'contentSchema': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "contentSchema"
                            )
                        ).map(
                            ($) => Schema($.value, abort)
                        ),

                        /******** deprecated ********/
                        'definitions': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "definitions"
                            )
                        ).map(
                            ($) => p_change_context(
                                r_unmarshall.Object_With_Unique_Keys_From_Object(
                                    r_unmarshall.Object($.value, abort),
                                    abort
                                ),
                                ($) => p_.from.dictionary($.properties).map(
                                    ($) => Schema($.value, abort))
                            )
                        ),

                        'dependencies': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "dependencies"
                            )
                        ).map(
                            ($) => p_change_context(
                                r_unmarshall.Object_With_Unique_Keys_From_Object(
                                    r_unmarshall.Object($.value, abort),
                                    abort
                                ),
                                ($) => p_.from.dictionary($.properties).map(
                                    ($) => {
                                        const x = $
                                        return p_.from.state($.value.type).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'array': return p_.option($, ($) => ['array', String_Array($, abort)])
                                                    default: return ['schema', Schema(x.value, abort)]
                                                }
                                            })
                                    })
                            )),

                        '$recursiveAnchor': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$recursiveAnchor"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                        '$recursiveRef': p_.from.optional(
                            p_.from.dictionary($.properties).get_possible_entry(
                                "$recursiveRef"
                            )
                        ).map(
                            ($) => r_unmarshall.String($.value, abort).token.value),

                    })
                )])
                default: return abort({
                    'type': ['unexpected type', {
                        'expected': p_.literal.list(['boolean', 'object'])
                    }],
                    'range': range,
                })
            }
        })
}

export const Schema_Array: p_i.Refiner<
    s_out.Schema_Array,
    s_error.Error,
    s_in.Array
> = ($, abort) => p_.from.list($.items).map(
    ($) => Schema($, abort))

export const String_Array: p_i.Refiner<
    s_out.String_Array,
    s_error.Error,
    s_in.Array
> = ($, abort) => p_.from.list($.items).map(
    ($) => r_unmarshall.String($, abort).token.value)

export const Simple_Types: p_i.Refiner<
    s_out.Simple_Types,
    s_error.Error,
    s_in.String
> = ($, abort) => {
    switch ($.token.value) {
        case "string": return ['string', null]
        case "number": return ['number', null]
        case "boolean": return ['boolean', null]
        case "object": return ['object', null]
        case "array": return ['array', null]
        case "null": return ['null', null]
        default: return abort({
            'type': ['unexpected enum value', {
                'expected': p_.literal.list(['string', 'number', 'boolean', 'object', 'array', 'null'])
            }],
            'range': $.range,
        })
    }
}