
import * as _pi from 'pareto-core/dist/interface'

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
    
    export namespace primitive {
        
        export type array = Array_
        
        export type boolean_ = Boolean_
        
        export type null_ = Null_
        
        export type number_ = Number_
        
        export type object_ = Object_
        
        export type string_ = String_
        
    }
    
    export type primitive = 
        | readonly ['array', primitive.array]
        | readonly ['boolean', primitive.boolean_]
        | readonly ['null', primitive.null_]
        | readonly ['number', primitive.number_]
        | readonly ['object', primitive.object_]
        | readonly ['string', primitive.string_]
    
    export type nullable = Value_
    
}

export type Value_ = 
    | readonly ['any', Value_.any_]
    | readonly ['any of', Value_.any_of]
    | readonly ['definition reference', Value_.definition_reference]
    | readonly ['primitive', Value_.primitive]
    | readonly ['nullable', Value_.nullable]

export namespace Array_ {
    
    export namespace type_ {
        
        export type dynamic = Value_
        
        export namespace static_ {
            
            export namespace properties {
                
                export type D = Value_
                
            }
            
            export type properties = _pi.Dictionary<properties.D>
            
        }
        
        export type static_ = {
            readonly 'properties': static_.properties
        }
        
    }
    
    export type type_ = 
        | readonly ['dynamic', type_.dynamic]
        | readonly ['static', type_.static_]
    
}

export type Array_ = {
    readonly 'type': Array_.type_
}

export type Boolean_ = null

export type Null_ = null

export type Number_ = null

export namespace Object_ {
    
    export namespace type_ {
        
        export type static_ = Static_Object_
        
        export type dynamic = Value_
        
        export namespace mixed {
            
            export type static_ = Static_Object_
            
            export type dynamic = Value_
            
        }
        
        export type mixed = {
            readonly 'static': mixed.static_
            readonly 'dynamic': mixed.dynamic
        }
        
    }
    
    export type type_ = 
        | readonly ['static', type_.static_]
        | readonly ['dynamic', type_.dynamic]
        | readonly ['mixed', type_.mixed]
    
}

export type Object_ = {
    readonly 'type': Object_.type_
}

export namespace Static_Object_ {
    
    export namespace properties {
        
        export namespace D {
            
            export type definition = Value_
            
            export namespace presence {
                
                export type required = null
                
                export namespace optional {
                    
                    export type nullable = boolean
                    
                }
                
                export type optional = {
                    readonly 'nullable': optional.nullable
                }
                
            }
            
            export type presence = 
                | readonly ['required', presence.required]
                | readonly ['optional', presence.optional]
            
        }
        
        export type D = {
            readonly 'definition': D.definition
            readonly 'presence': D.presence
        }
        
    }
    
    export type properties = _pi.Dictionary<properties.D>
    
}

export type Static_Object_ = {
    readonly 'properties': Static_Object_.properties
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

export { 
    Schema_ as Schema, 
    Value_ as Value, 
    Array_ as Array, 
    Boolean_ as Boolean, 
    Null_ as Null, 
    Number_ as Number, 
    Object_ as Object, 
    Static_Object_ as Static_Object, 
    String_ as String, 
}
