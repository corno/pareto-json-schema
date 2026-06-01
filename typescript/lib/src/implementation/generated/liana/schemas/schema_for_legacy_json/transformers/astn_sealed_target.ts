
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Schema: t_signatures.Schema = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "definitions": _p_change_context(
            $['definitions'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => Value(
                    $,
                ),
            )],
        ),
        "root": _p_change_context(
            $['root'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]

export const Value: t_signatures.Value = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'any':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'any',
                        'value': ['nothing', null],
                    }),
                )
            case 'any of':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'any of',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "array": _p_change_context(
                                    $['array'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Array(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "boolean": _p_change_context(
                                    $['boolean'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Boolean(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "null": _p_change_context(
                                    $['null'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Null(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "number": _p_change_context(
                                    $['number'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Number(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "object": _p_change_context(
                                    $['object'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Object(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "string": _p_change_context(
                                    $['string'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', String(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "else": _p_change_context(
                                    $['else'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]],
                                        () => ['not set', null],
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'definition reference':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'definition reference',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'primitive':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'primitive',
                        'value': ['state', _p.decide.state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'array':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'array',
                                                'value': Array(
                                                    $,
                                                ),
                                            }),
                                        )
                                    case 'boolean':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'boolean',
                                                'value': Boolean(
                                                    $,
                                                ),
                                            }),
                                        )
                                    case 'null':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'null',
                                                'value': Null(
                                                    $,
                                                ),
                                            }),
                                        )
                                    case 'number':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'number',
                                                'value': Number(
                                                    $,
                                                ),
                                            }),
                                        )
                                    case 'object':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'object',
                                                'value': Object(
                                                    $,
                                                ),
                                            }),
                                        )
                                    case 'string':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'string',
                                                'value': String(
                                                    $,
                                                ),
                                            }),
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            case 'nullable':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'nullable',
                        'value': Value(
                            $,
                        ),
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Array: t_signatures.Array = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'dynamic':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'dynamic',
                                    'value': Value(
                                        $,
                                    ),
                                }),
                            )
                        case 'static':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'static',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "properties": _p_change_context(
                                                $['properties'],
                                                ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                    $,
                                                ).map(
                                                    ($, id) => Value(
                                                        $,
                                                    ),
                                                )],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return _p.au(
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

export const Object: t_signatures.Object = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'static':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'static',
                                    'value': Static_Object(
                                        $,
                                    ),
                                }),
                            )
                        case 'dynamic':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'dynamic',
                                    'value': Value(
                                        $,
                                    ),
                                }),
                            )
                        case 'mixed':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'mixed',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "static": _p_change_context(
                                                $['static'],
                                                ($) => Static_Object(
                                                    $,
                                                ),
                                            ),
                                            "dynamic": _p_change_context(
                                                $['dynamic'],
                                                ($) => Value(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Static_Object: t_signatures.Static_Object = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "properties": _p_change_context(
            $['properties'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "definition": _p_change_context(
                            $['definition'],
                            ($) => Value(
                                $,
                            ),
                        ),
                        "presence": _p_change_context(
                            $['presence'],
                            ($) => ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'required':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'required',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'optional':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'optional',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "nullable": _p_change_context(
                                                                $['nullable'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['none', null],
                                                                    'value': v_primitives_to_text.true_false(
                                                                        $,
                                                                    ),
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const String: t_signatures.String = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'any':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'any',
                        'value': ['nothing', null],
                    }),
                )
            case 'enum':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'enum',
                        'value': ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['nothing', null],
                        )],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]
