
import * as _pi from 'pareto-core/dist/interface'

export namespace Array_ {
    
    export namespace type_ {
        
        export type list = Value_
        
    }
    
    export type type_ = 
        | readonly ['list', type_.list]
    
}

export type Array_ = {
    readonly 'type': Array_.type_
}

export type Boolean_ = null

export type Null_ = null

export type Number_ = null

export namespace Object_ {
    
    export namespace type_ {
        
        export namespace verbose_group {
            
            export namespace properties {
                
                export namespace D {
                    
                    export type definition = Value_
                    
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
        
        export type dictionary = Value_
        
    }
    
    export type type_ = 
        | readonly ['verbose group', type_.verbose_group]
        | readonly ['dictionary', type_.dictionary]
    
}

export type Object_ = {
    readonly 'type': Object_.type_
}

export namespace String_ {
    
    export type any_ = null
    
    export namespace enum_ {
        
        export type D = null
        
    }
    
    export type enum_ = _pi.Dictionary<enum_.D>
    
}

export type String_ = 
    | readonly ['any', String_.any_]
    | readonly ['enum', String_.enum_]

export namespace Value_ {
    
    export type any_ = null
    
    export namespace any_of {
        
        export namespace array {
            
            export type O = Array_
            
        }
        
        export type array = _pi.Optional_Value<array.O>
        
        export namespace boolean_ {
            
            export type O = Boolean_
            
        }
        
        export type boolean_ = _pi.Optional_Value<boolean_.O>
        
        export namespace null_ {
            
            export type O = Null_
            
        }
        
        export type null_ = _pi.Optional_Value<null_.O>
        
        export namespace number_ {
            
            export type O = Number_
            
        }
        
        export type number_ = _pi.Optional_Value<number_.O>
        
        export namespace object_ {
            
            export type O = Object_
            
        }
        
        export type object_ = _pi.Optional_Value<object_.O>
        
        export namespace string_ {
            
            export type O = String_
            
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
    
    export type array = Array_
    
    export type boolean_ = Boolean_
    
    export type null_ = Null_
    
    export type number_ = Number_
    
    export type object_ = Object_
    
    export type string_ = String_
    
}

export type Value_ = 
    | readonly ['any', Value_.any_]
    | readonly ['any of', Value_.any_of]
    | readonly ['definition reference', Value_.definition_reference]
    | readonly ['array', Value_.array]
    | readonly ['boolean', Value_.boolean_]
    | readonly ['null', Value_.null_]
    | readonly ['number', Value_.number_]
    | readonly ['object', Value_.object_]
    | readonly ['string', Value_.string_]

export namespace Schema_ {
    
    export namespace definitions {
        
        export type D = Value_
        
    }
    
    export type definitions = _pi.Dictionary<definitions.D>
    
    export type root = string
    
}

export type Schema_ = {
    readonly 'definitions': Schema_.definitions
    readonly 'root': Schema_.root
}

export { 
    Array_ as Array, 
    Boolean_ as Boolean, 
    Null_ as Null, 
    Number_ as Number, 
    Object_ as Object, 
    String_ as String, 
    Value_ as Value, 
    Schema_ as Schema, 
}
