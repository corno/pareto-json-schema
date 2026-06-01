import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_implement_me from 'pareto-core-dev/dist/implement_me'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as d_in from "pareto-json/dist/interface/to_be_generated/json"
import * as d_in_schema from "../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
import * as d_function from "../../../../interface/to_be_generated/sealed_target_from_parse_tree"

import * as r_json_unmarshalled_from_json from "pareto-json/dist/implementation/manual/refiners/unmarshalled/json"



// export const Value: _pi.Refiner_With_Parameter<
//     d_out.Value,
//     d_function.Error,
//     d_in.Value,
//     {
//         'definition': d_in_schema.Value,
//         'temp definitions': d_in_schema.Schema.definitions,
//     }
// > = (
//     $, abort, $p,
// ) => {
//         const value = $
//         return _p.decide.state($p.definition, ($): d_out.Value => {
//             switch ($[0]) {
//                 case 'any': return _p.ss($, ($) => ['nothing', null])
//                 case 'any of': return _p.ss($, ($): d_out.Value => {
//                     const $_any_of_def = $
//                     return _p.decide.state(
//                         value.type,
//                         ($): d_out.Value => {
//                             switch ($[0]) {
//                                 case 'string': return _p.ss($, ($) => {
//                                     const $_string = $
//                                     return $_any_of_def.string.__decide(
//                                         ($) => String(
//                                             $,
//                                             abort,
//                                             {
//                                                 'definition': $,
//                                                 'temp definitions': $p['temp definitions'],
//                                             }
//                                         ),
//                                         () => abort(['type not allowed', determine_allowed($_any_of_def)], $p.path)
//                                     )
//                                 })
//                                 case 'number': return _p.ss($, ($) => {
//                                     const $_number = $
//                                     return $_any_of_def.number.__decide(
//                                         ($) => ['text', {
//                                             'delimiter': ['none', null],
//                                             'value': "" + $_number,
//                                         }],
//                                         () => abort(['type not allowed', determine_allowed($_any_of_def)], $p.path)
//                                     )
//                                 })
//                                 case 'boolean': return _p.ss($, ($) => {
//                                     const $_boolean = $
//                                     return $_any_of_def.boolean.__decide(
//                                         ($) => ['text', {
//                                             'delimiter': ['none', null],
//                                             'value': $_boolean ? "true" : "false",
//                                         }],
//                                         () => abort(['type not allowed', determine_allowed($_any_of_def)], $p.path)
//                                     )
//                                 })
//                                 case 'object': return _p.ss($, ($) => {
//                                     const $_object = $
//                                     return $_any_of_def.object.__decide(
//                                         ($) => Object_Definition({
//                                             'json object': $_object,
//                                             'definition': $,
//                                             'path': $p.path,
//                                             'temp definitions': $p['temp definitions'],
//                                         }),
//                                         () => abort(['type not allowed', determine_allowed($_any_of_def)], $p.path)
//                                     )
//                                 })
//                                 case 'array': return _p.ss($, ($) => {
//                                     const $_array = $
//                                     return $_any_of_def.array.__decide(
//                                         ($) => ['text', {
//                                             'delimiter': ['none', null],
//                                             'value': "FIXME ARRAY",
//                                         }],
//                                         () => abort(['type not allowed', determine_allowed($_any_of_def)], $p.path)
//                                     )
//                                 })
//                                 case 'null': return _p.ss($, ($) => {
//                                     const $_null = $
//                                     return $_any_of_def.null.__decide(
//                                         ($) => ['text', {
//                                             'delimiter': ['none', null],
//                                             'value': "null",
//                                         }],
//                                         () => abort(['type not allowed', determine_allowed($_any_of_def)], $p.path)
//                                     )
//                                 })
//                                 default: return _p.au($[0])
//                             }
//                         }
//                     )
//                 })
//                 case 'array': return _p.ss($, ($) => Array(
//                     _p.decide.state(value.type, ($) => {
//                         switch ($[0]) {
//                             case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                 switch ($[0]) {
//                                     case 'list': return _p.ss($, ($) => $)
//                                     default: return abort({
//                                         'type': ['not the right type', {
//                                             'expected': ['array', null],
//                                             'actual': [$[0], null],
//                                         }]
//                                     })
//                                 }
//                             }))
//                             default: return abort({
//                                 'type': ['not the right type', {
//                                     'expected': ['array', null],
//                                     'actual': [$[0], null],
//                                 }]
//                             })
//                         }
//                     }),
//                     abort,
//                     {
//                         'definition': $,
//                         'temp definitions': $p['temp definitions'],
//                     }
//                 ))

//                 case 'string': return _p.ss($, ($) => String(
//                     _p.decide.state(value.type, ($) => {
//                         switch ($[0]) {
//                             case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                 switch ($[0]) {
//                                     case 'text': return _p.ss($, ($) => $)
//                                     default: return abort({
//                                         'type': ['not the right type', {
//                                             'expected': ['string', null],
//                                             'actual': [$[0], null],
//                                         }]
//                                     })
//                                 }
//                             }))
//                             default: return abort({
//                                 'type': ['not the right type', {
//                                     'expected': ['string', null],
//                                     'actual': [$[0], null],
//                                 }]
//                             })
//                         }
//                     }),
//                     abort,
//                     {
//                         'definition': $,
//                         'temp definitions': $p['temp definitions'],
//                     }
//                 ))
//                 case 'number': return _p.ss($, ($) => Number(
//                     _p.decide.state(value.type, ($) => {
//                         switch ($[0]) {
//                             case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                 switch ($[0]) {
//                                     case 'text': return _p.ss($, ($) => $)
//                                     default: return abort({
//                                         'type': ['not the right type', {
//                                             'expected': ['number', null],
//                                             'actual': [$[0], null],
//                                         }]
//                                     })
//                                 }
//                             }))
//                             default: return abort({
//                                 'type': ['not the right type', {
//                                     'expected': ['number', null],
//                                     'actual': [$[0], null],
//                                 }]
//                             })
//                         }
//                     }),
//                     abort,
//                     {
//                         'definition': $,
//                         'temp definitions': $p['temp definitions'],
//                     }
//                 ))
//                 case 'boolean': return _p.ss($, ($) => Boolean(
//                     _p.decide.state(value.type, ($) => {
//                         switch ($[0]) {
//                             case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                 switch ($[0]) {
//                                     case 'text': return _p.ss($, ($) => $)
//                                     default: return abort({
//                                         'type': ['not the right type', {
//                                             'expected': ['boolean', null],
//                                             'actual': [$[0], null],
//                                         }]
//                                     })
//                                 }
//                             }))
//                             default: return abort({
//                                 'type': ['not the right type', {
//                                     'expected': ['boolean', null],
//                                     'actual': [$[0], null],
//                                 }]
//                             })
//                         }
//                     }),
//                     abort,
//                     {
//                         'definition': $,
//                         'temp definitions': $p['temp definitions'],
//                     }
//                 ))
//                 case 'object': return _p.ss($, ($) => Object(
//                     value,
//                     abort,
//                     {
//                         'definition': $,
//                         'temp definitions': $p['temp definitions'],
//                     }
//                 ))
//                 case 'definition reference': return _p.ss($, ($) => $p['temp definitions'].__get_entry($).__decide(
//                     ($) => Value(
//                         {
//                             'json value': $p['json value'],
//                             'path': $p.path,
//                             'definition': $,
//                             'temp definitions': $p['temp definitions'],
//                         }
//                     ),
//                     () => _p.panic("missing definition reference: " + $)
//                 ))
//                 case 'null': return _p.ss($, ($) => Null(
//                     value,
//                     abort,
//                     {
//                         'definition': $,
//                         'temp definitions': $p['temp definitions'],
//                     }
//                 ))
//                 default: return _p.au($[0])
//             }
//         })
//     }

// export const String: _pi.Refiner_With_Parameter<
//     d_out.Value,
//     d_function.Error,
//     d_in.Value.type_.concrete.text,
//     {
//         'definition': d_in_schema.String,
//         'temp definitions': d_in_schema.Schema.definitions,
//     }> = (
//         $, abort, $p,
//     ) => ss

// export const Object: _pi.Refiner_With_Parameter<
//     d_out.Value,
//     d_function.Error,
//     d_in.Value.type_.concrete.dictionary,
//     {
//         'definition': d_in_schema.Object,
//         'temp definitions': d_in_schema.Schema.definitions,
//     }> = (
//         $, abort, $p,
//     ) => ss

// export const Array: _pi.Refiner_With_Parameter<
//     d_out.Value,
//     d_function.Error,
//     d_in.Value.type_.concrete.list,
//     {
//         'definition': d_in_schema.Array,
//         'temp definitions': d_in_schema.Schema.definitions,
//     }> = (
//         $, abort, $p,
//     ) => ss

// export const Null: _pi.Refiner_With_Parameter<
//     d_out.Value,
//     d_function.Error,
//     d_in.Value.type_.concrete.text,
//     {
//         'definition': d_in_schema.Null,
//         'temp definitions': d_in_schema.Schema.definitions,
//     }> = (
//         $, abort, $p,
//     ) => ss

// export const Boolean: _pi.Refiner_With_Parameter<
//     d_out.Value,
//     d_function.Error,
//     d_in.Value.type_.concrete.text,
//     {
//         'definition': d_in_schema.Boolean,
//         'temp definitions': d_in_schema.Schema.definitions,
//     }> = (
//         $, abort, $p,
//     ) => ss

// export const Number: _pi.Refiner_With_Parameter<
//     d_out.Value,
//     d_function.Error,
//     d_in.Value.type_.concrete.text,
//     {
//         'definition': d_in_schema.Number,
//         'temp definitions': d_in_schema.Schema.definitions,
//     }> = (
//         $, abort, $p,
//     ) => ['text', {
//         'delimiter': ['none', null],
//         'value': "" + expect_number($p['json value']),
//     }]