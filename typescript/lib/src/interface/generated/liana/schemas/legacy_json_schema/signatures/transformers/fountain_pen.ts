
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "../../data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Array_Definition_ {
    
    export type I = i_in.Array_Definition
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Array_Definition_ = (
    context: Array_Definition_.I,
) => Array_Definition_.O

export namespace Boolean_Definition_ {
    
    export type I = i_in.Boolean_Definition
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Boolean_Definition_ = (
    context: Boolean_Definition_.I,
) => Boolean_Definition_.O

export namespace Null_Definition_ {
    
    export type I = i_in.Null_Definition
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Null_Definition_ = (
    context: Null_Definition_.I,
) => Null_Definition_.O

export namespace Number_Definition_ {
    
    export type I = i_in.Number_Definition
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Number_Definition_ = (
    context: Number_Definition_.I,
) => Number_Definition_.O

export namespace Object_Definition_ {
    
    export type I = i_in.Object_Definition
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Object_Definition_ = (
    context: Object_Definition_.I,
) => Object_Definition_.O

export namespace String_Definition_ {
    
    export type I = i_in.String_Definition
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type String_Definition_ = (
    context: String_Definition_.I,
) => String_Definition_.O

export namespace Definition_ {
    
    export type I = i_in.Definition
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Definition_ = (
    context: Definition_.I,
) => Definition_.O

export namespace Schema_ {
    
    export type I = i_in.Schema
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
) => Schema_.O

export namespace Error_ {
    
    export type I = i_in.Error
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    context: Error_.I,
) => Error_.O

export namespace Value_Type_ {
    
    export type I = i_in.Value_Type
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Value_Type_ = (
    context: Value_Type_.I,
) => Value_Type_.O

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
