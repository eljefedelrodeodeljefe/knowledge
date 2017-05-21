# Sigaction

Signaling processes for termination can be done via the `sigaction` API. Ref:  http://pubs.opengroup.org/onlinepubs/7908799/xsh/sigaction.html

However in C++ programs one should avoid those and rather rely on C++ mechanisms
like `try`, `catch`, `raise`.
