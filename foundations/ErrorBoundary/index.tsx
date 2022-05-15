import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(
    error: Error,
    errorInfo: ErrorInfo
  ): State {
    return {
      error,
      errorInfo,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // TODO: log error to my service
    console.log(error, errorInfo);
  }

  public render() {
    if (this.state.error) {
      return <h1>something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
