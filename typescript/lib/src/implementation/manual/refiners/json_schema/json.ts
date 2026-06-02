import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_cc from 'pareto-core/dist/_p_change_context'

import * as d_in from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"
import * as d_out from "../../../../interface/to_be_generated/json_schema"

import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"

//dependencies
import * as r_json_y from "pareto-json/dist/implementation/manual/refiners/json_y/json_with_parse_info"

export type My_Error = {
    'type':
    | ['unexpected type', {
        'expected': _pi.List<string>
    }]
    | ['unexpected enum value', {
        'expected': _pi.List<string>
    }]
    | ['multiple properties with this key', string]

    'range': d_location.Range
}

export const Schema: _pi.Refiner<
    d_out.Schema,
    My_Error,
    d_in.Value
> = ($, abort) => {
    const range = $.range
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ['boolean', null])
            case 'object': return _p.ss($, ($): d_out.Schema => ['object', _p_cc(
                r_json_y.Object_With_Unique_Keys(
                    $,
                    ($) => abort({
                        'type': ['multiple properties with this key', $['conflicting key']],
                        'range': $['range'],
                    })
                ),
                ($): d_out.Schema_Object => ({

                    'const': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("const")
                    ).map(($) => $.value),
                    
                    'type': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("type")
                    ).map(($): d_out.Type => _p.decide.state($.value.type, ($) => {
                        switch ($[0]) {
                            case 'string': return _p.ss($, ($) => ['single', Primitive($, abort)])
                            case 'array': return _p.ss($, ($) => ['array', $.items.__l_map(($) => _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'string': return _p.ss($, ($) => Primitive($, abort))
                                    default: return abort({
                                        'type': ['unexpected type', {
                                            'expected': _p.list.literal(['string'])
                                        }],
                                        'range': range,
                                    })
                                }
                            }))])
                            // case 'null':
                            default: return abort({
                                'type': ['unexpected type', {
                                    'expected': _p.list.literal(['string', 'array'])
                                }],
                                'range': range,
                            })
                        }
                    })),
                })
            )])
            default: return abort({
                'type': ['unexpected type', {
                    'expected': _p.list.literal(['boolean', 'object'])
                }],
                'range': range,
            })
        }
    })
}

export const Primitive: _pi.Refiner<
    d_out.Primitive,
    My_Error,
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
                'expected': _p.list.literal(['string', 'number', 'boolean', 'object', 'array', 'null'])
            }],
            'range': $.range,
        })
    }
}