import { aws_apigateway as apigateway } from 'aws-cdk-lib';

// Type that covers both `IntegrationResponse` and `MethodResponse`.
interface Response<T> {
  responseParameters?: { [key: string]: T };
};

// Access-Control-Allow-Origin response header.
const ALLOW_ORIGIN = 'method.response.header.Access-Control-Allow-Origin';
// Access-Control-Allow-Headers response header.
const ALLOW_HEADERS = 'method.response.header.Access-Control-Allow-Headers';
// Access-Control-Allow-Methods response header.
const ALLOW_METHODS = 'method.response.header.Access-Control-Allow-Methods';

// surrounds `aws_apigateway.Cors.ALL_ORIGINS` with quotation marks.
const ALL_ORIGINS = `'${apigateway.Cors.ALL_ORIGINS}'`;
// joins `aws_apigateway.Cors.DEFAULT_HEADERS`
// and surrounds it with quotation marks.
const DEFAULT_HEADERS = `'${apigateway.Cors.DEFAULT_HEADERS.join(',')}'`;
// joins `aws_apigateway.Cors.ALL_METHODS`
// and surrounds it with quotation marks.
const ALL_METHODS = `'${apigateway.Cors.ALL_METHODS.join(',')}'`;

/** Makes given `IntegrationResponses` allow CORS. */
export function makeIntegrationResponsesAllowCors(
  responses: apigateway.IntegrationResponse[],
): apigateway.IntegrationResponse[] {
  responses = setResponseParameters(responses, ALLOW_ORIGIN, ALL_ORIGINS);
  responses = setResponseParameters(responses, ALLOW_HEADERS, DEFAULT_HEADERS);
  responses = setResponseParameters(responses, ALLOW_METHODS, ALL_METHODS);
  return responses;
}

/** Makes given `MethodResponses` allow CORS. */
export function makeMethodResponsesAllowCors(
  responses: apigateway.MethodResponse[],
): apigateway.MethodResponse[] {
  responses = setResponseParameters(responses, ALLOW_ORIGIN, true);
  responses = setResponseParameters(responses, ALLOW_HEADERS, true);
  responses = setResponseParameters(responses, ALLOW_METHODS, true);
  return responses;
}

// Sets the value of a given response header.
function setResponseParameters<T, U extends Response<T>>(
  responses: U[],
  key: string,
  value: T,
): U[] {
  return responses.map(response => {
    const { responseParameters } = response;
    return {
      ...response,
      responseParameters: {
        ...(responseParameters || {}),
        [key]: value,
      },
    };
  });
}
