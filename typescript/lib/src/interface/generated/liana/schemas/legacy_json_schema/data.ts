
import * as _pi from 'pareto-core/dist/interface'

export namespace Array_Definition_ {
    
    export namespace type_ {
        
        export type list = Definition_
        
    }
    
    export type type_ = 
        | readonly ['list', type_.list]
    
}

export type Array_Definition_ = {
    readonly 'type': Array_Definition_.type_
}

export type Boolean_Definition_ = null

export type Null_Definition_ = null

export type Number_Definition_ = null

export namespace Object_Definition_ {
    
    export namespace type_ {
        
        export namespace verbose_group {
            
            export namespace properties {
                
                export namespace D {
                    
                    export type definition = Definition_
                    
                    export type optional = boolean
                    
                }
                
                export type D = {
                    readonly 'definition': D.definition
                    readonly 'optional': D.optional
                }
                
            }
            
            export type properties = _pi.Dictionary<properties.D>
            
        }
        
        export type verbose_group = {
            readonly 'properties': verbose_group.properties
        }
        
        export type dictionary = Definition_
        
    }
    
    export type type_ = 
        | readonly ['verbose group', type_.verbose_group]
        | readonly ['dictionary', type_.dictionary]
    
}

export type Object_Definition_ = {
    readonly 'type': Object_Definition_.type_
}

export namespace String_Definition_ {
    
    export type any_ = null
    
    export namespace enum_ {
        
        export type D = null
        
    }
    
    export type enum_ = _pi.Dictionary<enum_.D>
    
}

export type String_Definition_ = 
    | readonly ['any', String_Definition_.any_]
    | readonly ['enum', String_Definition_.enum_]

export namespace Definition_ {
    
    export type any_ = null
    
    export namespace any_of {
        
        export namespace array {
            
            export type O = Array_Definition_
            
        }
        
        export type array = _pi.Optional_Value<array.O>
        
        export namespace boolean_ {
            
            export type O = Boolean_Definition_
            
        }
        
        export type boolean_ = _pi.Optional_Value<boolean_.O>
        
        export namespace null_ {
            
            export type O = Null_Definition_
            
        }
        
        export type null_ = _pi.Optional_Value<null_.O>
        
        export namespace number_ {
            
            export type O = Number_Definition_
            
        }
        
        export type number_ = _pi.Optional_Value<number_.O>
        
        export namespace object_ {
            
            export type O = Object_Definition_
            
        }
        
        export type object_ = _pi.Optional_Value<object_.O>
        
        export namespace string_ {
            
            export type O = String_Definition_
            
        }
        
        export type string_ = _pi.Optional_Value<string_.O>
        
        export namespace else_ {
            
            export type O = string
            
        }
        
        export type else_ = _pi.Optional_Value<else_.O>
        
    }
    
    export type any_of = {
        readonly 'array': any_of.array
        readonly 'boolean': any_of.boolean_
        readonly 'null': any_of.null_
        readonly 'number': any_of.number_
        readonly 'object': any_of.object_
        readonly 'string': any_of.string_
        readonly 'else': any_of.else_
    }
    
    export type definition_reference = string
    
    export type array = Array_Definition_
    
    export type boolean_ = Boolean_Definition_
    
    export type null_ = Null_Definition_
    
    export type number_ = Number_Definition_
    
    export type object_ = Object_Definition_
    
    export type string_ = String_Definition_
    
}

export type Definition_ = 
    | readonly ['any', Definition_.any_]
    | readonly ['any of', Definition_.any_of]
    | readonly ['definition reference', Definition_.definition_reference]
    | readonly ['array', Definition_.array]
    | readonly ['boolean', Definition_.boolean_]
    | readonly ['null', Definition_.null_]
    | readonly ['number', Definition_.number_]
    | readonly ['object', Definition_.object_]
    | readonly ['string', Definition_.string_]

export namespace Schema_ {
    
    export namespace definitions {
        
        export type D = Definition_
        
    }
    
    export type definitions = _pi.Dictionary<definitions.D>
    
    export type root = string
    
}

export type Schema_ = {
    readonly 'definitions': Schema_.definitions
    readonly 'root': Schema_.root
}

export namespace Error_ {
    
    export type path = string
    
    export namespace type_ {
        
        export namespace not_the_right_type {
            
            export type expected = Value_Type_
            
            export type actual = Value_Type_
            
        }
        
        export type not_the_right_type = {
            readonly 'expected': not_the_right_type.expected
            readonly 'actual': not_the_right_type.actual
        }
        
        export namespace type_not_allowed {
            
            export type type_ = Value_Type_
            
        }
        
        export type type_not_allowed = {
            readonly 'type': type_not_allowed.type_
        }
        
        export type missing_property = string
        
        export namespace superfluous_property {
            
            export type name = string
            
            export type type_ = Value_Type_
            
        }
        
        export type superfluous_property = {
            readonly 'name': superfluous_property.name
            readonly 'type': superfluous_property.type_
        }
        
    }
    
    export type type_ = 
        | readonly ['not the right type', type_.not_the_right_type]
        | readonly ['type not allowed', type_.type_not_allowed]
        | readonly ['missing property', type_.missing_property]
        | readonly ['superfluous property', type_.superfluous_property]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export namespace Value_Type_ {
    
    export type array = null
    
    export type boolean_ = null
    
    export type null_ = null
    
    export type number_ = null
    
    export type object_ = null
    
    export type string_ = null
    
}

export type Value_Type_ = 
    | readonly ['array', Value_Type_.array]
    | readonly ['boolean', Value_Type_.boolean_]
    | readonly ['null', Value_Type_.null_]
    | readonly ['number', Value_Type_.number_]
    | readonly ['object', Value_Type_.object_]
    | readonly ['string', Value_Type_.string_]

export { 
    Array_Definition_ as Array_Definition, 
    Boolean_Definition_ as Boolean_Definition, 
    Null_Definition_ as Null_Definition, 
    Number_Definition_ as Number_Definition, 
    Object_Definition_ as Object_Definition, 
    String_Definition_ as String_Definition, 
    Definition_ as Definition, 
    Schema_ as Schema, 
    Error_ as Error, 
    Value_Type_ as Value_Type, 
}
