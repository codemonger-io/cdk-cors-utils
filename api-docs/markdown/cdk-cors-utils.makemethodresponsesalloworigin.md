<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@codemonger-io/cdk-cors-utils](./cdk-cors-utils.md) &gt; [makeMethodResponsesAllowOrigin](./cdk-cors-utils.makemethodresponsesalloworigin.md)

## makeMethodResponsesAllowOrigin() function

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Makes given [MethodResponse](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.MethodResponse.html)<!-- -->s allow an origin.

**Signature:**

```typescript
export declare function makeMethodResponsesAllowOrigin<T extends apigateway.MethodResponse>(responses: T[]): T[];
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

responses


</td><td>

T\[\]


</td><td>

Method response settings to allow an origin.


</td></tr>
</tbody></table>
**Returns:**

T\[\]

`responses` with updated [responseParameters](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.MethodResponse.html#responseparameters)<!-- -->.

## Remarks

Marks `Access-Control-Allow-Origin` response header included.

