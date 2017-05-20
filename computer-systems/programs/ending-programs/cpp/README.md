# Ending C/C++ Programs

## Do Signal with Signal Handler

When you want to signal a process with `std::raise`, set the signal handler with `std::signal` to
avoid implementation defined behaviour. Ref: http://en.cppreference.com/w/c/program/raise
