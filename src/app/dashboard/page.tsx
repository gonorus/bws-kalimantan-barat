'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import {
  HttpTransportType,
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel,
} from '@microsoft/signalr';
import { useEffect } from 'react';
import {
  DeviceStationContext,
  IDevice,
  IGetDevicesResponse,
} from '@Infrastructures/DeviceStations';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const BerandaMap = dynamic(() => import('@OrganismComponents/TileMapBeranda'), {
  ssr: false,
});

const queryClient = new QueryClient();

export default function DashboardPage() {
  const connection = new HubConnectionBuilder()
    .withUrl('http://103.154.130.12/realtimehub', {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets,
      logger: LogLevel.Debug,
    })
    .build();
  useEffect(() => {
    if (connection.state === HubConnectionState.Disconnected) {
      connection
        .start()
        .then(() => {
          console.debug('[GonoDebug] websocket connection success', connection);
          connection.on('LastReading', (newDeviceData: IDevice) => {
            console.debug('[GonoDebug] websocket new data retrieve', {
              newData: newDeviceData,
              currData: queryClient.getQueryData<IGetDevicesResponse>([
                DeviceStationContext.POS_CURAH_HUJAN,
              ]),
            });
            queryClient.setQueryData<IGetDevicesResponse>(
              [DeviceStationContext.POS_CURAH_HUJAN],
              (prevState) => {
                if (prevState === undefined) return undefined;
                return {
                  ...prevState,
                  response: [
                    ...prevState.response.filter(
                      (device) => device.id !== newDeviceData.id
                    ),
                    { ...newDeviceData },
                  ],
                };
              }
            );
          });
        })
        .catch((error) =>
          console.debug('[GonoDebug] websocket connection error', error)
        );
    }

    return () => {
      if (connection.state === HubConnectionState.Connected) connection.stop();
    };
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BerandaMap />
    </QueryClientProvider>
  );
}
