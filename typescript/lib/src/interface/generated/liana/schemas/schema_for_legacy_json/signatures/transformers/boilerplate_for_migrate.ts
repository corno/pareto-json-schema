
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "../../data"

import * as i_in from "../../data"

export namespace Array_ {
    
    export type I = i_in.Array
    
    export type O = i_out.Array
    
    export namespace P {
        
    }
    
}

export type Array_ = (
    context: Array_.I,
) => Array_.O

export namespace Boolean_ {
    
    export type I = i_in.Boolean
    
    export type O = i_out.Boolean
    
    export namespace P {
        
    }
    
}

export type Boolean_ = (
    context: Boolean_.I,
) => Boolean_.O

export namespace Null_ {
    
    export type I = i_in.Null
    
    export type O = i_out.Null
    
    export namespace P {
        
    }
    
}

export type Null_ = (
    context: Null_.I,
) => Null_.O

export namespace Number_ {
    
    export type I = i_in.Number
    
    export type O = i_out.Number
    
    export namespace P {
        
    }
    
}

export type Number_ = (
    context: Number_.I,
) => Number_.O

export namespace Object_ {
    
    export type I = i_in.Object
    
    export type O = i_out.Object
    
    export namespace P {
        
    }
    
}

export type Object_ = (
    context: Object_.I,
) => Object_.O

export namespace String_ {
    
    export type I = i_in.String
    
    export type O = i_out.String
    
    export namespace P {
        
    }
    
}

export type String_ = (
    context: String_.I,
) => String_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
) => Value_.O

export namespace Schema_ {
    
    export type I = i_in.Schema
    
    export type O = i_out.Schema
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
) => Schema_.O

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
