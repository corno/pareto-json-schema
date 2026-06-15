import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_temp from 'pareto-core/dist/assign'
import * as p_i from 'pareto-core/dist/interface/refiner'
import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as d_in from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"
import * as d_out from "../../../../interface/to_be_generated/json_schema"
import * as d_function from "pareto-json/dist/interface/to_be_generated/unmarshalled_from_json"

//dependencies
import * as r_json_y from "pareto-json/dist/implementation/manual/refiners/json_y/json_with_parse_info"
import * as r_json_x from "pareto-json/dist/implementation/manual/refiners/json_x/json_with_parse_info"


export const Schema: p_i.Refiner<
    d_out.Schema,
    d_function.Error,
    d_in.Value
> = ($, abort) => {
    const range = $.range
    return p_.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'boolean': return p_.ss($, ($) => ['boolean', $.value])
            case 'object': return p_.ss($, ($): d_out.Schema => ['object', p_change_context(
                r_json_x.Object_No_Unexpected_Properties_From_Object( //okay for now, but the JSON schema spec allows additional properties
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
                ($): d_out.Schema_Object => ({

                    /******** core ********/

                    '$id': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$id")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$schema': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$schema")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$ref': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$ref")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$anchor': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$anchor")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$dynamicRef': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$dynamicRef")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$dynamicAnchor': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$dynamicAnchor")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$vocabulary': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$vocabulary")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => r_json_x.Boolean($.value, abort).value)
                    )),

                    '$comment': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$comment")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$defs': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$defs")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    /******** applicator ********/

                    'prefixItems': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("prefixItems")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'items': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("items")
                    ).map(($) => Schema($.value, abort)),

                    'contains': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contains")
                    ).map(($) => Schema($.value, abort)),

                    'additionalProperties': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("additionalProperties")
                    ).map(($) => Schema($.value, abort)),

                    'properties': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("properties")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'patternProperties': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("patternProperties")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'dependentSchemas': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("dependentSchemas")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'propertyNames': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("propertyNames")
                    ).map(($) => Schema($.value, abort)),

                    'if': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("if")
                    ).map(($) => Schema($.value, abort)),

                    'then': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("then")
                    ).map(($) => Schema($.value, abort)),

                    'else': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("else")
                    ).map(($) => Schema($.value, abort)),

                    'oneOf': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("oneOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'anyOf': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("anyOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'allOf': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("allOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'not': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("not")
                    ).map(($) => Schema($.value, abort)),

                    /******** unevaluated ********/

                    'unevaluatedItems': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("unevaluatedItems")
                    ).map(($) => Schema($.value, abort)),

                    'unevaluatedProperties': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("unevaluatedProperties")
                    ).map(($) => Schema($.value, abort)),

                    /******** validation ********/

                    'type': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("type")
                    ).map(($): d_out.Type => p_.decide.state($.value.type, ($) => {
                        switch ($[0]) {
                            case 'string': return p_.ss($, ($) => ['single', Simple_Types($, abort)])
                            case 'array': return p_.ss($, ($) => ['array', $.items.__l_map(($) => Simple_Types(r_json_x.String($, abort), abort))])
                            default: return abort({
                                'type': ['unexpected type', {
                                    'expected': p_.literal.list(['string', 'array'])
                                }],
                                'range': range,
                            })
                        }
                    })),

                    'const': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("const")
                    ).map(($) => $.value),

                    'enum': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("enum")
                    ).map(($) => r_json_x.Array($.value, abort).items),

                    'multipleOf': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("multipleOf")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'maximum': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maximum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'exclusiveMaximum': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("exclusiveMaximum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minimum': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minimum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'exclusiveMinimum': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("exclusiveMinimum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'maxLength': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxLength")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minLength': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minLength")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'pattern': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("pattern")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'maxItems': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxItems")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minItems': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minItems")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'uniqueItems': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("uniqueItems")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'maxContains': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxContains")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minContains': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minContains")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'maxProperties': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxProperties")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minProperties': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minProperties")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'required': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("required")
                    ).map(($) => String_Array(r_json_x.Array($.value, abort), abort)),

                    'dependentRequired': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("dependentRequired")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => String_Array(r_json_x.Array($.value, abort), abort))
                    )),

                    /******** meta-data ********/

                    'title': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("title")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'description': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("description")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'default': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("default")
                    ).map(($) => $.value),

                    'deprecated': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("deprecated")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'readOnly': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("readOnly")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'writeOnly': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("writeOnly")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'examples': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("examples")
                    ).map(($) => r_json_x.Array($.value, abort).items),

                    /******** format-annotation ********/

                    'format': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("format")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    /******** content ********/

                    'contentEncoding': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contentEncoding")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'contentMediaType': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contentMediaType")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'contentSchema': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contentSchema")
                    ).map(($) => Schema($.value, abort)),

                    /******** deprecated ********/
                    'definitions': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("definitions")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'dependencies': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("dependencies")
                    ).map(($) => p_change_context(
                        r_json_y.Object_With_Unique_Keys_From_Object(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => {
                            const x = $
                            return p_.decide.state($.value.type, ($) => {
                                switch ($[0]) {
                                    case 'array': return p_.ss($, ($) => ['array', String_Array($, abort)])
                                    default: return ['schema', Schema(x.value, abort)]
                                }
                            })
                        })
                    )),

                    '$recursiveAnchor': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$recursiveAnchor")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$recursiveRef': p_temp.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$recursiveRef")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

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
    d_out.Schema_Array,
    d_function.Error,
    d_in.Array
> = ($, abort) => $.items.__l_map(($) => Schema($, abort))

export const String_Array: p_i.Refiner<
    d_out.String_Array,
    d_function.Error,
    d_in.Array
> = ($, abort) => $.items.__l_map(($) => r_json_x.String($, abort).token.value)

export const Simple_Types: p_i.Refiner<
    d_out.Simple_Types,
    d_function.Error,
    d_in.String
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