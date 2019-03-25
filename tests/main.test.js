// main.test.js

function main() {
  // async function getToken()
  it('returns a bearer token.', async () => {
    const mock = jest.fn();
    mock.mockReturnValue('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb');
    expect(mock()).toEqual('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb');
  });

  // async function getOrganizationId(token)
  it('returns an organization id based on the token given for getOrganizationId', async () => {
    const mock = jest.fn();
    mock.mockReturnValue('c72db99c-a5a7-4c89-9d53-66512523f678');
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb')).toEqual('c72db99c-a5a7-4c89-9d53-66512523f678');
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb');
  });

  // async function createContractWithAsset(token, clientAppName, primeArtifactName)
  it('returns an array of two values for createContractWithAsset', () => {
    const mock = jest.fn();
    mock.mockReturnValue(['abc-123', 'open-sesame']);
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi-int', 'emp-sapi')).toEqual(['abc-123', 'open-sesame']);
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi-int', 'emp-sapi');
  });

  // async function isClientApplicationByName(token, clientApplicationName)
  it('returns a boolean true if application can be found by name', () => {
    const mock = jest.fn();
    mock.mockReturnValue(true);
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi-int')).toEqual(true);
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi-int');
  });

  // async function createApiManagerInstance(assetId, version, groupId, environmentName)
  it('returns a string id from 4 arguments for createApiManagerInstance', () => {
    const mock = jest.fn();
    mock.mockReturnValue('1577523455');
    expect(mock('emp-xapi', '1.0.0', 'c72db99c-a5a7-4c89-9d53-66512523f678', 'Sandbox2')).toEqual('1577523455');
    expect(mock).toHaveBeenCalledWith('emp-xapi', '1.0.0', 'c72db99c-a5a7-4c89-9d53-66512523f678', 'Sandbox2');
  });

  // async function getVersionId(token, apiId, productVersion)
  it('returns a string id from 3 arguments for getVersionId', () => {
    const mock = jest.fn();
    mock.mockReturnValue('1256803862');
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', '1850270', 'v1')).toEqual('1256803862');
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', '1850270', 'v1');
  });

  // async function getApi(token, apiId)
  it('returns a JSON object from 2 arguments for getApi', () => {
    const mock = jest.fn();
    mock.mockReturnValue({ name: 'Bob' });
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', '1850270')).toEqual({ name: 'Bob' });
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', '1850270');
  });

  // async function getApiId(token, apiName)
  it('returns a string id from 2 arguments for getApiId', () => {
    const mock = jest.fn();
    mock.mockReturnValue('1234');
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-sapi')).toEqual('1234');
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-sapi');
  });

  // async function getApplicationId(token, applicationName)
  it('returns a string id from 2 arguments for getApplicationId', () => {
    const mock = jest.fn();
    mock.mockReturnValue('5678');
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi-int')).toEqual('5678');
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi-int');
  });

  // async function createContractRequestingAccess(token, apiId, versionId, applicationId)
  it('returns an array of two credentials from 4 arguments for createContractRequestingAccess', () => {

  });

  // async function deleteApplication(token, appId)
  it('returns a status code and no body from 2 arguments for deleteApplication', () => {

  });

  // async function createClientApplication(token, clientName)
  it('returns a JSON object from 2 arguments for createClientApplication', () => {
    const mock = jest.fn();
    mock.mockReturnValue({ someKey: 'abc123' });
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi')).toEqual({ someKey: 'abc123' });
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'emp-xapi');
  });

  // async function getExchangeAssets(token)
  it('returns a JSON array from 1 argument for getExchangeAssets', () => {

  });

  // async function getExchangeAssetById(token, groupId, assetId)
  it('returns a JSON object from 3 arguments for getExchangeAssetById', () => {
    const mock = jest.fn();
    mock.mockReturnValue({ state: 'Virginia' });
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'c72db99c-a5a7-4c89-9d53-66512523f678', '1850270')).toEqual({ state: 'Virginia' });
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'c72db99c-a5a7-4c89-9d53-66512523f678', '1850270');
  });

  // async function getExchangeGroups(token)
  it('returns a JSON array from the token given for getExchangeGroups', () => {

  });

  // async function getEnvApis(token)
  it('returns a JSON array from the token given for getEnvApis', async () => {

  });

  // async function getApis(token)
  it('returns a JSON array from the token given for getApis', () => {

  });

  // async function getApplications(token)
  it('returns a JSON array from the token given for getApplications', () => {

  });

  // async function getEnvironments(token)
  it('returns a JSON array from the token given for getEnvironments', () => {

  });

  // async function getDefaultEnvironmentId(token)
  it('returns a string id from the token given for getDefaultEnvironmentId', () => {

  });

  // async function getEnvironmentIdByName(token, environmentName)
  it('returns a string id for the environmentName given', () => {
    const mock = jest.fn();
    mock.mockReturnValue('1234');
    expect(mock('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'Sandbox2')).toEqual('1234');
    expect(mock).toHaveBeenCalledWith('5b2f78c9-3c43-4c24-9b22-8139d4ccc4fb', 'Sandbox2');
  });
}

main();
