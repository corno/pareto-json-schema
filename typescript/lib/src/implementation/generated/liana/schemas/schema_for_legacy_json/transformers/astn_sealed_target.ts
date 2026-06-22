
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "imports": p_change_context(
            $['imports'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => Document(
                    $,
                ),
            )],
        ),
        "definitions": p_change_context(
            $['definitions'],
            ($) => Definitions(
                $,
            ),
        ),
        "root": p_change_context(
            $['root'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]

export const Definitions: t_signatures.Definitions = ($) => ['dictionary', p_.from.dictionary($,
).map(
    ($, id) => Schema(
        $,
    ),
)]

export const Schema: t_signatures.Schema = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'any':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'any',
                        'value': ['nothing', null],
                    }),
                )
            case 'const':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'const',
                        'value': Const_Value(
                            $,
                        ),
                    }),
                )
            case 'one of':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'one of',
                        'value': ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id) => Schema(
                                $,
                            ),
                        )],
                    }),
                )
            case 'reference':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'reference',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "document": p_change_context(
                                    $['document'],
                                    ($) => ['optional', p_decide_optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]],
                                        () => ['not set', null],
                                    )],
                                ),
                                "definition": p_change_context(
                                    $['definition'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                            },
                        )]],
                    }),
                )
            case 'type constraint':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'type constraint',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'single':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'single',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'array':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'array',
                                                                        'value': Array(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            case 'boolean':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'boolean',
                                                                        'value': Boolean(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            case 'null':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'null',
                                                                        'value': Null(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            case 'number':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'number',
                                                                        'value': Number(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            case 'object':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'object',
                                                                        'value': Object(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            case 'string':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'string',
                                                                        'value': String(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            default:
                                                                return p_.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )],
                                            }),
                                        )
                                    case 'multiple':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'multiple',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "array": p_change_context(
                                                            $['array'],
                                                            ($) => ['optional', p_decide_optional(
                                                                $,
                                                                ($): t_out.Value.optional => ['set', Array(
                                                                    $,
                                                                )],
                                                                () => ['not set', null],
                                                            )],
                                                        ),
                                                        "boolean": p_change_context(
                                                            $['boolean'],
                                                            ($) => ['optional', p_decide_optional(
                                                                $,
                                                                ($): t_out.Value.optional => ['set', Boolean(
                                                                    $,
                                                                )],
                                                                () => ['not set', null],
                                                            )],
                                                        ),
                                                        "null": p_change_context(
                                                            $['null'],
                                                            ($) => ['optional', p_decide_optional(
                                                                $,
                                                                ($): t_out.Value.optional => ['set', Null(
                                                                    $,
                                                                )],
                                                                () => ['not set', null],
                                                            )],
                                                        ),
                                                        "number": p_change_context(
                                                            $['number'],
                                                            ($) => ['optional', p_decide_optional(
                                                                $,
                                                                ($): t_out.Value.optional => ['set', Number(
                                                                    $,
                                                                )],
                                                                () => ['not set', null],
                                                            )],
                                                        ),
                                                        "object": p_change_context(
                                                            $['object'],
                                                            ($) => ['optional', p_decide_optional(
                                                                $,
                                                                ($): t_out.Value.optional => ['set', Object(
                                                                    $,
                                                                )],
                                                                () => ['not set', null],
                                                            )],
                                                        ),
                                                        "string": p_change_context(
                                                            $['string'],
                                                            ($) => ['optional', p_decide_optional(
                                                                $,
                                                                ($): t_out.Value.optional => ['set', String(
                                                                    $,
                                                                )],
                                                                () => ['not set', null],
                                                            )],
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Const_Value: t_signatures.Const_Value = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'array':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'array',
                        'value': ['list', p_.from.list($,
                        ).map(
                            ($) => Const_Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'boolean':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'boolean',
                        'value': ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    }),
                )
            case 'null':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'null',
                        'value': ['nothing', null],
                    }),
                )
            case 'number':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.fractional_decimal(
                                $,
                                {
                                    'number of fractional digits': 0,
                                },
                            ),
                        }],
                    }),
                )
            case 'object':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'object',
                        'value': ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id) => Const_Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'string':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'string',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Array: t_signatures.Array = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'dynamic':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'dynamic',
                                    'value': Schema(
                                        $,
                                    ),
                                }),
                            )
                        case 'static':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'static',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "properties": p_change_context(
                                                $['properties'],
                                                ($) => ['dictionary', p_.from.dictionary($,
                                                ).map(
                                                    ($, id) => Schema(
                                                        $,
                                                    ),
                                                )],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Boolean: t_signatures.Boolean = ($) => ['nothing', null]

export const Null: t_signatures.Null = ($) => ['nothing', null]

export const Number: t_signatures.Number = ($) => ['nothing', null]

export const Object: t_signatures.Object = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'static':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'static',
                                    'value': Static_Object(
                                        $,
                                    ),
                                }),
                            )
                        case 'dynamic':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'dynamic',
                                    'value': Schema(
                                        $,
                                    ),
                                }),
                            )
                        case 'mixed':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'mixed',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "static": p_change_context(
                                                $['static'],
                                                ($) => Static_Object(
                                                    $,
                                                ),
                                            ),
                                            "dynamic": p_change_context(
                                                $['dynamic'],
                                                ($) => Schema(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Static_Object: t_signatures.Static_Object = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "properties": p_change_context(
            $['properties'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "schema": p_change_context(
                            $['schema'],
                            ($) => Schema(
                                $,
                            ),
                        ),
                        "optional": p_change_context(
                            $['optional'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const String: t_signatures.String = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'any':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'any',
                        'value': ['nothing', null],
                    }),
                )
            case 'enum':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'enum',
                        'value': ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id) => ['nothing', null],
                        )],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]
