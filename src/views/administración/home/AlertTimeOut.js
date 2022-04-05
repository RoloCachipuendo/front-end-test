import  { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import UseSecurity from "security/useSecurity";
import { useIdleTimer } from "react-idle-timer";
import { debounce } from "throttle-debounce";
import {  msmSwalInformacion } from "configurations/styles/theme";


const AlertTimeOut = ({ percentageWarnigTimeOut = 20 }) => {
  const history = useHistory();

  const {
    sessionTimeOut,
    updateTk,
    getTotalTimeSession,
    signout,
  } = UseSecurity();
  const totalTime = getTotalTimeSession();


  /**
   * Comienza el listener de eventos: clic, teclas, scroll, ...
   */
  const initIdleTimer = useCallback(
    debounce(20000, true, () => {
      resume();
    }),
    []
  );

  /**
   * Se ejecuta cuando se detecta actividad, 
   * posterior a la activación del listener 
   * de eventos
   */
  const restoreToken = useCallback(
    debounce(20000, true, () => {
      updateTk()
        .catch((error) => {
          msmSwalInformacion(error).then((action) => {
            if (action.isConfirmed) {
              signout();
              history.push("/");
            }
          });
        })
        .finally(() => {
          reset();
          pause();
        });
    }),
    []
  );

  const handleOnActive = () => {
    restoreToken();
  };

  const { resume, reset, pause } = useIdleTimer({
    timeout: (totalTime * percentageWarnigTimeOut) / 100,
    onAction: handleOnActive,
    debounce: 500,
  });


  useEffect(() => {
    pause();
    const id = setInterval(() => {
      const currentTime = sessionTimeOut();
      const totalTimeSession = getTotalTimeSession();
      const waringTimeOut = (totalTimeSession * percentageWarnigTimeOut) / 100;
      if (currentTime < waringTimeOut && currentTime > 1) {
        initIdleTimer();

      } else if (currentTime <= 0) {
        clearInterval(id);
        signout();
        history.push("/");
      }

      return () => {
        clearInterval(id);
      };
    }, 30000);
  }, []);

  return null;
};

export default AlertTimeOut;
