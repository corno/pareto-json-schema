
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/legacy_json_schema/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Array_Definition: t_signatures.Array_Definition = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'list':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'list',
                                    'value': Definition(
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
        ),
    },
)]]

export const Boolean_Definition: t_signatures.Boolean_Definition = ($) => ['nothing', null]

export const Null_Definition: t_signatures.Null_Definition = ($) => ['nothing', null]

export const Number_Definition: t_signatures.Number_Definition = ($) => ['nothing', null]

export const Object_Definition: t_signatures.Object_Definition = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'verbose group':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'verbose group',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
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
                                                                ($) => Definition(
                                                                    $,
                                                                ),
                                                            ),
                                                            "optional": _p_change_context(
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
                                    )]],
                                }),
                            )
                        case 'dictionary':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'dictionary',
                                    'value': Definition(
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
        ),
    },
)]]

export const String_Definition: t_signatures.String_Definition = ($) => ['state', _p.decide.state(
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

export const Definition: t_signatures.Definition = ($) => ['state', _p.decide.state(
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
                                        ($): t_out.Value.optional => ['set', Array_Definition(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "boolean": _p_change_context(
                                    $['boolean'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Boolean_Definition(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "null": _p_change_context(
                                    $['null'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Null_Definition(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "number": _p_change_context(
                                    $['number'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Number_Definition(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "object": _p_change_context(
                                    $['object'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Object_Definition(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "string": _p_change_context(
                                    $['string'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', String_Definition(
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
            case 'array':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'array',
                        'value': Array_Definition(
                            $,
                        ),
                    }),
                )
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'boolean',
                        'value': Boolean_Definition(
                            $,
                        ),
                    }),
                )
            case 'null':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'null',
                        'value': Null_Definition(
                            $,
                        ),
                    }),
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': Number_Definition(
                            $,
                        ),
                    }),
                )
            case 'object':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'object',
                        'value': Object_Definition(
                            $,
                        ),
                    }),
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'string',
                        'value': String_Definition(
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

export const Schema: t_signatures.Schema = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "definitions": _p_change_context(
            $['definitions'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => Definition(
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

export const Error: t_signatures.Error = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "path": _p_change_context(
            $['path'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'not the right type':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'not the right type',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "expected": _p_change_context(
                                                $['expected'],
                                                ($) => Value_Type(
                                                    $,
                                                ),
                                            ),
                                            "actual": _p_change_context(
                                                $['actual'],
                                                ($) => Value_Type(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'type not allowed':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'type not allowed',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "type": _p_change_context(
                                                $['type'],
                                                ($) => Value_Type(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'missing property':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'missing property',
                                    'value': ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                }),
                            )
                        case 'superfluous property':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'superfluous property',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "name": _p_change_context(
                                                $['name'],
                                                ($) => ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }],
                                            ),
                                            "type": _p_change_context(
                                                $['type'],
                                                ($) => Value_Type(
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

export const Value_Type: t_signatures.Value_Type = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'array':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'array',
                        'value': ['nothing', null],
                    }),
                )
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'boolean',
                        'value': ['nothing', null],
                    }),
                )
            case 'null':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'null',
                        'value': ['nothing', null],
                    }),
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['nothing', null],
                    }),
                )
            case 'object':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'object',
                        'value': ['nothing', null],
                    }),
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'string',
                        'value': ['nothing', null],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]
